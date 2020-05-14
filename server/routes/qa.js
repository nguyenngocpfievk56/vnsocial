var express = require('express');
var router = express.Router();
var multer = require("multer");
const Qa = require('../models/qa');

var storage = multer.diskStorage({
    destination(req, file, cb) {
        let path = `static/uploads`;
        cb(null, path);
    },
    filename: function(req, file, cb) {
        var name = Date.now();
        cb(null, name + ".png");
    }
});

var upload = multer({ storage: storage }).single("img");

router.post('/create', function (req, res) {
    upload(req, res, function(err) {
        if (err) {
            res.json({
                error: true,
                message: 'Đăng ảnh thất bại'
            })
        }
        try {
            var img = req.file.path.replace("static", "");

            var data = JSON.parse(req.body.data);

            var content = data.content;
            var user_id = data.user_id;
            var description = data.description;

            var qa = new Qa();
            qa.content = content;
            qa.user = user_id;
            qa.description = description;
            qa.img = img;
            qa.save((err) => {
                if (err) {
                    res.json({
                        error: true,
                        message: 'Có lỗi xảy ra, ko đăng được bài'
                    })
                    return false;
                }
                res.json({ error: false, data: qa });
            })
        } catch (err) {
            res.json({
                error: true,
                message: 'Đăng ảnh thất bại'
            })
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

router.get('/remove', function (req, res) {
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