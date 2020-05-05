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

module.exports = router;