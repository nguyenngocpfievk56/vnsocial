var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/login', function (req, res) {
  var email = "nguyen.huu.ngoc@elife.co.jp";
  var password = "123456";

  User.findOne({ email: email, password: password }, function (err, user) {
    if (err) {
      res.json({ message: 'Có lỗi' });
      return;
    }
    if (user) {
      res.json({ user });
    } else {
      res.json({ message: 'Tài khoản không tồn tại!' });
    }
  })
});

router.get('/create', function (req, res) {
  var name = "Ngoc";
  var email = "nguyen.huu.ngoc@elife.co.jp";
  var password = "123456";
  var img = "https://cdn.vuetifyjs.com/images/john.jpg";

  User.findOne({ email, deleted_at: null }, function (err, existUser) {
    if (err) {
      res.send("Có lỗi");
      return;
    }
    if (existUser) {
      res.json({ error: "Email đã được sử dụng!" });
    } else {
      var newUser = new User();
      newUser.name = name;
      newUser.email = email;
      newUser.password = password;
      newUser.img = img;
      newUser.save(function(err) {
        if (err) {
          res.json({ error: "Có lỗi" });
          return;
        }
        res.json({ user: newUser });
      });
    }
  });
  // res.json({ user }); // = res.json({ user: user });
});

router.get('/update', function (req, res) {
  var name = "Ngoc 123";
  var email = "nguyen.huu.ngoc123@elife.co.jp";
  var password = "123456";
  var img = "https://cdn.vuetifyjs.com/images/john.jpg";
  var _id = "5e8743294f59fd36ba191184";

  User.updateOne({ _id }, { $set: { name, email, password, img }}, function (err, reponse) {
    if (err) {
      res.send("Có lỗi");
    }
    res.json({ response })
  });
});

router.get('/resign', function (req, res) {
  var _id = "5e8743294f59fd36ba191184";
  User.deleteOne({ _id }, function (err, response) {
    if (err) {
      res.send("Có lỗi");
    }
    res.json({ response })
  });
});

module.exports = router;