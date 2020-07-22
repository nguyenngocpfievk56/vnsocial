var mongoose = require('mongoose');

var scSchema = mongoose.Schema({
  content: {
    type: String,
    require: true
  },
  shop: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shop'
	},
  user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
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
  },
});

module.exports = mongoose.model('ShopComment', scSchema);
