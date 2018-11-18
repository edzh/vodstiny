var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VodSchema = new Schema({
  vodId: {
    type: String,
    unique: true,
    required: true
  },
  date: Date,
  timestamps: [{
    type: Schema.Types.ObjectId,
    unique: true,
    index: false,
    ref: 'timestamp'
  }]

});

module.exports = mongoose.model('vod', VodSchema);
