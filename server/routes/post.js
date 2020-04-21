var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.post('/create', function (req, res){
    console.log(req.body);
    var username = "hùng chu ";
    var content = req.body.content;
    var img = req.body.img;
    var createPost = new Post();    
    createPost.username = username;
    createPost.content = content;
    createPost.img = img;
    createPost.save(function(err) {
        if(err){
        res.json({error: "tạo thất bại"});
        return;
        }
        res.json({ post: createPost });
    })
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
    Post.find(function(err, response){
        if(err){
            res.json({error: "Có lỗi"});
            return;
        }
        res.json({ Post: response})
    })
})

module.exports = router;