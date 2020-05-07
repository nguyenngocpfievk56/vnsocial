var mongoose = require('mongoose');

var qaSchema = mongoose.Schema({
  content: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: false
  },
  img: {
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
  },
});

module.exports = mongoose.model('qa', qaSchema);
