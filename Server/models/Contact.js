const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  msg: String,
});

const Contact = mongoose.model('Contact', contactSchema,'Data');

module.exports = Contact;
