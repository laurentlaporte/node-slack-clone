var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  id: String,
  text: String,
  time: Number,
  username: String
});

module.exports = mongoose.model('Message', messageSchema);
