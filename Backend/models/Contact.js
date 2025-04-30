const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  location: String,
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
