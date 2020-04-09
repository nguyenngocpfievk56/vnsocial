var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  img: {
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

module.exports = mongoose.model('Post', postSchema);