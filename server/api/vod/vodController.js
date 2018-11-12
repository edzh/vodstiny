var Vod = require('./vodModel');

exports.params = function(req, res, next, id) {
  Vod.findById(id)
    .then(function(vod) {
      if (!vod) {
        next(new Error('No vod with that id'));
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
    .populate('timestamps')
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
  var newVod = new Vod(req.body);
  newVod.save(function(err, user) {
    if (err) {
      return next(err);
    }
  })
};

exports.post = function(req, res, next) {
  var newVod = req.body;
  Vod.create(newVod)
    .then(function(vod) {
      res.json(vod);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.vod.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  })
};
