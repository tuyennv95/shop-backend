`use strict`;
const shopModels = require("../models/shop.models");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const keyTokenModel = require("../models/keyToken.model");
const { createTokens } = require("../utils/authUtils");
const keyTokenService = require("./keyToken.service");
const { getInfoReturnData } = require("../utils");
const _SALT = 10;

class accessService {
  static signUp = async ({ name, email, password }) => {
    try {
      //   if (!name || !email || !password) {
      //   }
      const checkShop = await shopModels.findOne({ email }).lean();
      if (checkShop) {
        return {
          code: "xxx",
          message: "tài khoản này đã tồn tại",
        };
      }
      const passwordHash = await bcrypt.hash(password, _SALT);
      const newShop = await shopModels.create({
        name,
        email,
        password: passwordHash,
        role: ["SHOP"],
      });

      if (newShop) {
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
          privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
        });

        const publicKeyString = await keyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
        });

        if (!publicKeyString) {
          return {
            code: "xx",
            message: "publicKeyString error",
          };
        }
        const publicKeyObject = crypto.createPublicKey(publicKeyString);
        const tokens = await createTokens(
          { userId: newShop._id, email },
          publicKeyString,
          privateKey
        );

        return {
          code: 201,
          data: {
            shop: getInfoReturnData({fileds: ['_id', 'name', 'email'], object: newShop}),
            tokens,
          },
        };
      }
      return {
        code: 200,
        data: null,
      };
    } catch (error) {
      return error;
    }
  };
}

module.exports = accessService;
