const mongoose = require("mongoose");
const { numberConnect } = require("../helpers/checkConnect");
const mongoUri = "mongodb://localhost:27017/shopDev";

class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(mongoUri)
      .then((_) => console.log(`Connect DB Success with number connect ${numberConnect()}`))
      .catch((err) => console.log("Error connect"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
