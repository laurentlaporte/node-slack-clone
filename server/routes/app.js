var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app', {
    title: "Lau's Slack clone",
    channels: ['general', 'tech', 'gaming', 'deploy', 'devops']
  });
});

module.exports = router;
