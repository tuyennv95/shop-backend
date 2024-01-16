"use strict";
const apiKeyModel = require("../models/apikey.model");
const crypto = require("crypto");
const findByKey = async (key) => {
//   const keyCreate = crypto.randomBytes(64).toString("hex");
//   console.log("🚀 ~ keyCreate:", keyCreate);
//   const newKey = await apiKeyModel.create({
//     key: keyCreate,
//     permissions: ["0000"],
//   });
//   console.log("🚀 ~ newKey:", newKey);
  const objKey = await apiKeyModel.findOne({ key, status: true }).lean();

  return objKey;
};
module.exports = {
  findByKey,
};
