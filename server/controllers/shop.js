const shopModel = require('../models/shop');

const getShops = () => {
  var shops = shopModel.find({});
  console.log(shops);
}

const getShop = () => {
  shopModel.find({
    _id: '123141241421'
  })
}

const createShop = () => {
  shopModel.insert({
    name: 'sdfsdf',
    country: 'sdfsdf',
    img: 'sdfsdf',
    price: 1000
  })
}

const updateShop = () => {

}

const deleteShop = () => {

}
