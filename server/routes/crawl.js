var express = require('express');
var router = express.Router();
const axios = require("axios");
var DomParser = require('dom-parser');
var parser = new DomParser();
const Shop = require('../models/shop');

router.get('/run', async (req, res) => {
  var from = 2;
  var to = 10;
  const url = "https://therockin.com/shop/page/";
  for(var i = from; i<= to; i++) {
    const { data } = await axios.get(url + i).then().catch();
    var dom = parser.parseFromString(data);
    var divs = dom.getElementsByClassName('product-small.box');
    divs.map((i, d) => {
      pdivs = i.getElementsByClassName('attachment-woocommerce_thumbnail');
      var img = pdivs[0].getAttribute("src");
  
      tdivs = i.getElementsByClassName('product-title');
      var title = tdivs[0].textContent;
  
      var nShop = new Shop();
      nShop.name = title;
      nShop.img = img;
      nShop.price = 20;
      nShop.save();
    })
  }
  res.send("abc");
});

module.exports = router;