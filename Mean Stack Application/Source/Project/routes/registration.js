var express = require('express');
var router = express.Router();
var registration = require('../models/Registration.js');

router.get('/:emailid', function (req, res, next) {
  registration.findOne({'emailId': req.params.emailId}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.post('/', function (req, res, next) {
  registration.create(req.body, function (err, post) {
    console.log('in put of registration', req.body);
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
