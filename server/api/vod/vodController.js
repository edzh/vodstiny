var Vod = require('./vodModel');

exports.params = function(req, res, next, id) {
  Vod.findById(id)
    .then(function(vod) {
      if (!vod) {
        next(new Error('No category with that id'));
      } else {
        req.vod = vod;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Vod.find({})
    .populate('timestamp')
    .exec()
    .then(function(vods) {
      res.json(vods);
    }, function(err) {
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var vod = req.vod;
  res.json(vod);
};

exports.put = function(req, res, next) {

};

exports.post = function(req, res, next) {

};

exports.delete = function(req, res, next) {

};
