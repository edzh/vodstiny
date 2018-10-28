var _ = require('lodash');

var User = require('./userModel');
var signToken = require('../../auth/auth').signToken;

exports.params = function(req, res, next, id) {
  User.findById(id)
    .then(function(user) {
      if (!user) {
        next(new Error('No user with that id'));
      } else {
        req.vod = vod;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  User.find({})
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
  var user = req.user;

  var update = req.body;

  _.merge(user.update);

  user.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if(err) {
      return next(err);
    }

    var token = signToken(user._id);
    res.json({token: token});
  });
};

exports.delete = function(req, res, next) {
  req.user.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
