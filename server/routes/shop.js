var express = require('express');
var router = express.Router();
var multer = require("multer");
const User = require('../models/user');
const Shop = require('../models/shop');
const ShopComment = require('../models/shopcomment');

const UserService = require('../services/User');

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

router.get('/get-all', function (req, res) {
    var limit = 6;
    var maxId = req.query.maxId;
    var minId = req.query.minId;
    var query = {};
    if (maxId && minId) query = { "$or": [ { _id: { "$gt": maxId } }, { _id: { "$lt": minId }} ] };
    Shop.find(query, function (err, shops) {
      if (err) {
        res.send("Có lỗi");
      }
      if (!maxId) {
        maxId = shops[0]._id;
      } else {
        maxId = (maxId > shops[0]._id) ? maxId : shops[0]._id;
      }

      if (!minId) {
        minId = shops[shops.length - 1]._id;
      } else {
        minId = (minId < shops[shops.length - 1]._id) ? minId : shops[shops.length - 1]._id;
      }

      res.json({ data: shops, minId, maxId })
    })
    .sort({ '_id': -1 })
    .limit(limit);
});

router.get('/detail/:id', function (req, res) {
  Shop.findById(req.params.id, function (err, shop) {
    if (err) {
      res.send("Có lỗi");
    }
    res.json({ data: shop })
  })
});

router.post('/:id/comment', async (req, res) => {
  var userInfo = await UserService.checkUser(req.body.params.user);
  if (!userInfo) return res.send("hack");
  
  var shopInfo = await Shop.findById(req.body.params.shop);
  if (!shopInfo) return res.send("hack");

  var comment = new ShopComment(req.body.params);
  await comment.save();
  console.log(comment);
  res.send("ok");
});

router.get('/:id/comments', function (req, res) {
  var shopId = req.params.id;
  ShopComment.find({ shop: shopId }, function (err, comments) {
    if (err) {
      res.send("Có lỗi");
    }
    res.json({ comments })
  })
});

module.exports = router;