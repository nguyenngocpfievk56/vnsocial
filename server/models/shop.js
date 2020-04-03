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
  },
  created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		require: false
	},
	deleted_at: {
		type: Date,
		require: false
	}
});

module.exports = mongoose.model('Shop', shopSchema);