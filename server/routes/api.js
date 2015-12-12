var express = require('express');
var router = express.Router();

/* GET messages. */
router.get('/api/messages', function(req, res, next) {
  res.json([
    { name: "Lau", text: 'Hello world!', time: new Date().getTime() },
    { name: "Lau", text: 'Lets do this.', time: new Date().getTime() },
    { name: "Lau", text: 'React is awesome', time: new Date().getTime() }
  ]);
});

module.exports = router;
