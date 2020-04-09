var mongoose = require('mongoose');

var qaSchema = mongoose.Schema({
  content: {
    type: String,
    require: true
  },
  rating_point: {
    type: Number,
    require: true
  },
  user_id: {
    type: String,
    require: true
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
  is_deleted: {
    type: Number,
    require: 1
  }
});

module.exports = mongoose.model('qa', qaSchema);
