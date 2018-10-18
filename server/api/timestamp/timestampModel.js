var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TimestampSchema = new Schema({
  vod: {
    type: Schema.Types.ObjectId,
    ref: 'vod'
  },
  vodId: String,
  timestamp: String,
  topic: String,
  category: String

});

module.exports = mongoose.model('timestamp', TimestampSchema);
