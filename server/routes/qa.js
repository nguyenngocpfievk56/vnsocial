// Minh:
// find, udpate, delete, create cho QA

var express = require('express');
var router = express.Router();
const Qa = require('../models/qa');

router.get('/post', function (req, res) {
    var content = "Bài viết này hay quá!";
    var user_id = "5e8743294f59fd36ba191184";
    var rating_point = 0;

    Qa.findOne({ content, user_id, rating_point, deleted_at: null}, function (err) {
        if (err) {
        res.json({ message: 'Có lỗi' });
        return;
        } else {
        var newQa = new Qa();
        newQa.content = content;
        newQa.user_id = user_id;
        newQa.rating_point = rating_point;
        newQa.save(function(err) {
            if(err){
                res.json({ message: 'Có lỗi' });
                return;
            }
            res.json({ Qa: newQa});
        });
        }
    });
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

router.get('/getAll', function (req, res) {
    Qa.find(function (err, response) {
      if (err) {
        res.send("Có lỗi");
      }
      res.json({ response })
    });
});
  
module.exports = router;