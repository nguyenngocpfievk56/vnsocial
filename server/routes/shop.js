// Thao:
// find, udpate, delete, create cho cửa hàng

var express = require('express');
var router = express.Router();
const Shop = require('../models/shop');

router.get('/create', function (req, res){
    console.log(req.body);
    var name = req.body.name;
    var price = req.body.price;
    var country = req.body.country;
    var img = req.body.img;
    var createShop = new Shop();    
    createShop.price = price;
    createShop.name = name;
    createShop.country = country;
   createShop.img = img;
    createShop.save((err) => {
        if (err) throw err;
        res.json({ data: createShop });
    })
});
router.post('/update', function (req,res){
    var name = " robot1";
    var price = "1000";
    var img = "https://fn.vinhphuc.edu.vn/UploadImages/thcstthoason/anh-phong-canh-dep-nhat-the-gioi.jpg";
    var country = "hcm";
    Shop.updateOne({ _id }, {$set:{ name, price, img, country}}, function(err, response){
        if(err){
            res.json({error: "update thất bại"});
            return;
        }
        res.json({ response })
    })
})
router.get('/delete', function(req,res){
    var _id = "5eb0d2d7fea9065a02c6c85a";
    Shop.deleteOne({_id}, function(err, response){
        if(err){
            res.json({error: " xóa thất bại"});
        return;
        }
    res.json({ response })
    })
})
router.get('/find', function(req,res){ 
    Shop.find(function(err, shops){
        if(err){
            res.json({error: "Có lỗi"});
            return;
        }
        res.json({ data: Shops})
    })
    .populate('user')
})

module.exports = router;