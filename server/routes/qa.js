// Minh:
// find, udpate, delete, create cho QA

var express = require('express');
var router = express.Router();
const Qa = require('../models/qa');

router.post('/create', function (req, res) {
    var content = req.body.content;
    var user_id = req.body.user_id;

    var qa = new Qa();
    qa.content = content;
    qa.user = user_id;
    qa.save((err) => {
        if (err) throw err;
        res.json({ data: qa });
    })
});

router.get('/update', function (req, res) {
    var content = "Bài viết này qua hay!";
    var _id = "5e8f1a9101c6f13ee0124c04"

    Qa.updateOne({ _id }, { $set: { content }}, function (err, response) {
        if (err) {
        res.send("Có lỗi");
        }
        res.json({ response })
    });
});

router.get('/resign', function (req, res) {
    var _id = "5e8f1a9101c6f13ee0124c04";
    Qa.deleteOne({ _id }, function (err, response) {
        if (err) {
        res.send("Có lỗi");
        }
        res.json({ response })
    });
});

router.get('/get-all', function (req, res) {
    Qa.find({}, function (err, qas) {
      if (err) {
        res.send("Có lỗi");
      }
      res.json({ data: qas })
    })
    .populate('user');
});
  
module.exports = router;