const mongoose = require('mongoose');

module.exports = mongoose.model('JobEntity', new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true, unique: true },
  code: { type: String, unique: true, unique: true },
  path: { type: String, required: true },
  timer: { type: Number },
  createdAt: { type: Date, default: Date.now },
}));
