var Timestamp = require('./timestampModel');

exports.params = function(req, res, next, id) {
  Timestamp.findById(id)
    .then(function(timestamp) {
      if (!timestamp) {
        next(new Error('No timestamp with that id'))
      } else {
        req.timestamp = timestamp;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Timestamp.find(req.query)
    .exec()
    .then(function(timestamps) {
      res.json(timestamps);
    }, function(err) {
      next(err);
    })
};

exports.getOne = function(req, res, next) {
  var timestamp = req.timestamp;
  res.json(timestamp);
};

exports.put = function(req, res, next) {

};

exports.post = function(req, res, next) {
  var newTimestamp = req.body;
  Timestamp.create(newTimestamp)
    .then(function(timestamp) {
      res.json(timestamp);
    }, function(err) {
      // logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {

};
