var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.post('/info', function (req, res) {
  var id = req.body.id;

  User.findById(id, (err, user) => {
    if (err) throw err;
    res.json({ user });
  })
});

router.post('/update', function (req, res) {
  var userId = req.body.userId;
  var img = req.body.img;
  var name = req.body.name;

  var data = {};
  if (img) {
    data.img = img;
  }

  if (name) {
    data.name = name;
  }

  User.updateOne({ _id: userId }, data, (err) => {
    if (err) throw err;

    User.findById(userId, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  })
});

module.exports = router;