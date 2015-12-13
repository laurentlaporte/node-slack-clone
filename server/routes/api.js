var express = require('express');
var router = express.Router();
var io = require('../io');

var Message = require('../models/Message');

/* GET messages. */
router.get('/messages', function(req, res, next) {
  Message.find({}, function(err, data) {
    if(err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }
    res.json(data);
  });
});

router.post('/messages', function(req, res, next) {
  var newMessage = new Message(req.body)
  newMessage.save(function(err, data) {
    if(err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }

    io.sockets.emit('new_message', data)

    res.json(data);
  });
});

module.exports = router;
