// Thao:
// find, udpate, delete, create cho cửa hàng

var express = require('express');
var router = express.Router();
var multer = require("multer");
const Shop = require('../models/shop');

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
         var price = data.price;
         var country = data.country;
          var content = data.content;
          var user_id = data.user_id;
          var description = data.description;

          var createShop = new Shop();
          createShop.content = content;
          createShop.price = price;
          createShop.country = country;
          createShop.user = user_id;
          createShop.description = description;
          createShop.img = img;
          createShop.save((err) => {
              if (err) {
                  res.json({
                      error: true,
                      message: 'đăng ảnh lỗi'
                  })
                  return false;
              }
              res.json({ error: false, data: createShop });
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
  var content = "ninja ";
  var _id = "5eb0d2d7fea9065a02c6c85a";
  var price = "1";
  var description = "abc";

  Shop.updateOne({ _id }, { $set: { content}}, function (err, response) {
      if (err) {
      res.send("Có lỗi");
      }
      res.json({ response })
  });
});

router.get('/delete', function (req, res) {
  var _id = "5eb0d2d7fea9065a02c6c85a";
  Shop.deleteOne({ _id }, function (err, response) {
      if (err) {
      res.send("Có lỗi");
      }
      res.json({ response })
  });
});
router.get('/find', function (req, res) {
  Shop.find({}, function (err, shops) {
    if (err) {
      res.send("Có lỗi");
    }
    res.json({ data: shops })
  })
  .populate('user');
});
module.exports = router;