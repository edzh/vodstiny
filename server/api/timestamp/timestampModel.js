var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TimestampSchema = new Schema({
  vod: {
    type: Schema.Types.ObjectId,
    ref: 'vod',
    required: true
  },
  vodId: {
    type: String,
    required: true
  },
  timestamp: {
    type:String,
    required: true
  },
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  topic: String,
  category: String

});

module.exports = mongoose.model('timestamp', TimestampSchema);
