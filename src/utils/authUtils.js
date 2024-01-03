const jwt = require("jsonwebtoken");

const accessTokenExpiresIn = "2 days";
const refreshTokenExpiresIn = "7 days";
const createTokens = async ( payload, publicKey, privateKey ) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: accessTokenExpiresIn
    });
    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: refreshTokenExpiresIn
    });
    jwt.verify(accessToken, publicKey, (err, decode) => {
      if (err) {
        console.error("Failed to verify AccessToken:", err);
      } else {
        console.log("Decoded AccessToken:", decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (error) {
    return error;
  }
};
module.exports = {
  createTokens,
};
