var express = require('express');
var router = express.Router();

/* Map everything to app */
router.get('*', function(req, res, next) {
  res.render('app', {
    title: "Lau's Slack clone"
  });
});

module.exports = router;
