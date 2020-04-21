var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: false
  },
  isAdmin: {
    type: Boolean,
    default: false
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

module.exports = mongoose.model('User', userSchema);