const path = require("path");
const envPath = path.join(__dirname, "../../.env");
require("dotenv").config({ path: envPath });
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongodb connected!");
});

module.exports = db