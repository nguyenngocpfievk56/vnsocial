var express = require("express");
var router = express.Router();
var multer = require("multer");

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

router.post("/image", (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      res.json({
        error: true,
        message: 'Đăng ảnh thất bại'
      })
    }
    try {
      var img = req.file.path.replace("static", "");
      res.json({
        error: false,
        url: img
      })
    } catch (err) {
      res.json({
        error: true,
        message: 'Đăng ảnh thất bại'
      })
    }
  });
});

module.exports = router;
