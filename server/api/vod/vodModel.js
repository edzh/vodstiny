var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VodSchema = new Schema({
  vodId: {
    type: String,
    unique: true,
    required: true
  },
  date: String,
  timestamps: [{
    type: Schema.Types.ObjectId,
    ref: 'timestamp'
  }],

});

module.exports = mongoose.model('vod', VodSchema);
