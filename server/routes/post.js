var express = require('express');
var router = express.Router();
var multer = require("multer");
const Post = require('../models/post');

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

router.post('/create', function (req, res){
    upload(req, res, function(err) {
        if (err) {
          res.json({
            error: true,
            message: 'Đăng ảnh thất bại'
          })
        }
        try {
          var img = req.file.path.replace("static", "");

          var data = JSON.parse(req.body.data)

          var user_id = data.user_id;
          var username = data.username;
          var content = data.content;
          var createPost = new Post();    
          createPost.user = user_id;
          createPost.username = username;
          createPost.content = content;
          createPost.img = img;
          createPost.save((err) => {
              if (err) {
                res.json({
                    error: true,
                    message: 'Đăng thất bại'
                  })
                  return false;
              };
              res.json({ errow: false, data: createPost });
          })
        } catch (err) {
          res.json({
            error: true,
            message: 'Đăng ảnh thất bại'
          })
        }
      });
    console.log(req.body);
});
router.get('/update', function (req,res){
    var username = " Ngô Văn Hùng";
    var content = "bài tập hôm nay bình thường";
    var img = "https://cafebiz.cafebizcdn.vn/thumb_w/600/2020/3/2/reading-books-1583124397307491747436-crop-15831244058461265262311.jpg";
    var _id = "5e8df997d0c9be1078401a28";
    Post.updateOne({ _id }, {$set:{ username, content, img}}, function(err, response){
        if(err){
            res.json({error: "update thất bại"});
            return;
        }
        res.json({ response })
    })
})
router.get('/delete', function(req,res){
    var _id = "5e8df997d0c9be1078401a28";
    Post.deleteOne({_id}, function(err, response){
        if(err){
            res.json({error: " xóa thất bại"});
        return;
        }
    res.json({ response })
    })
})
router.get('/find', function(req,res){
  var limit = 5;
  var page = req.query.page;
  var offset = (page - 1) * limit;
    Post.find(function(err, posts){
        if(err){
            res.json({error: "Có lỗi"});
            return;
        }
        res.json({ data: posts})
    })
    .populate('user')
    .sort({ '_id': -1})
    .skip(offset)
    .limit(limit)
})

module.exports = router;