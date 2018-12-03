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
    type: String,
    validate: {
      validator: function(v) {
        return /^[0-9]{2}h[0-9]{2}m[0-9]{2}s$/.test(v)
      }
    },
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



// TimestampSchema.pre('save', function(next) {
//   this.sort(function(a, b) {
//     return b.timestamp - a.timestamp
//   })
// })

module.exports = mongoose.model('timestamp', TimestampSchema);
