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
  country: {
    type: String,
    require: true
  },
  description:{
      type:String,
      require:false
  },
  price: {
    type: Number,
    require: false
  },
  content: {
    type: String,
    require: false
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
	}
});

module.exports = mongoose.model('Shop', shopSchema);