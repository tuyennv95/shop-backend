
//file config trong moi truong phat trien DEV
const dev = {
  app: { port: process.env.DEV_APP_PORT || 5000 },
  db: {
    port: process.env.DEV_DB_PORT || 27017,
    uri: process.env.DEV_DB_URI || "localhost",
    name: process.env.DEV_DB_NAME || "shopDev",
  },
};
//config trong moi truong product
const product = {
  app: { port: process.env.PRODUCT_APP_PORT || 5001 },
  db: {
    port: process.env.PRODUCT_DB_PORT || 27017,
    uri: process.env.PRODUCT_DB_URI || "localhost",
    name: process.env.PRODUCT_DB_NAME || "shopProduct",
  },
};

const config = {dev, product}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]