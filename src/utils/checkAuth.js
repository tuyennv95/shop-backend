"use strict";
const { findByKey } = require("../service/apikey.service");
const HEADER = {
  API_KEY: "x-api-key",
  AUTHORZATION: "authorzation",
};
const apiKey = async (req, res, next) => {
  try {
    //   console.log('🚀 ~ req:', req);
    const key = req.headers[HEADER.API_KEY]?.toString();

    if (!key) {
      return res.status(403).json({
        message: "Forbidden Erro 1",
      });
    }
    const objKey = await findByKey(key);

    console.log("🚀 ~ file: checkAuth.js:19 ~ objKey:", objKey);

    if (!objKey) {
      return res.status(403).json({
        message: "Forbidden Erro 2",
      });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {
    console.log(error);
  }
};
const permission = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: "Forbidden Erro 3",
      });
    }
    const checkPermission = req.objKey.permissions.includes(permission);
    if (!checkPermission) {
      return res.status(403).json({
        message: "Forbidden Erro 4",
      });
    }
    return next();
  };
};
module.exports = {
  apiKey,
  permission,
};
