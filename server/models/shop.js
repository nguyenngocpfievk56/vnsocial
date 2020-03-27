var mongoose = require('mongoose');

var shopSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  country: {
    type: String,
    require: false
  }
});

module.exports = mongoose.model('Shop', shopSchema);