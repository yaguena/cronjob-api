const mongoose = require('mongoose');

module.exports = mongoose.model('JobEntity', new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  alias: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
}));