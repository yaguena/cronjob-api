const mongoose = require("mongoose");

module.exports = class DataBase {
  static config() {
    mongoose.connect('mongodb://127.0.0.1:27017/cronjob');
  }
}