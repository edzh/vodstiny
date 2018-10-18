var express = require('express');
var Timestamp = require('./timestampModel');
var timestampRouter = express.Router();

timestampRouter.get('/', function(req, res) {
  Timestamp.find({}, function(err, timestamps) {
    res.json(timestamps)
  })
})

timestampRouter.post('/post', function(req, res) {
  var timestamp = new Timestamp({
    vodId: '311111',
    date: '09/20/2019',
    timestamps: [
      {
        timestamp: '0:00:00',
        topic: 'hello',
        category: 'goodbye'
      }
    ]
  });

  timestamp.save();
  res.status(201).send(timestamp);
})

module.exports = timestampRouter;
