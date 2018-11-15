var Vod = require('./vodModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Vod.findById(id)
    // .populate('timestamps')
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
  // var vod = req.vod;
  // // console.log(vod);
  // // var timestamps = vod.timestamps
  // // console.log(timestamps);
  // // var update = timestamps.push(req.body);
  // // console.log(update);
  // console.log(vod.timestamps);
  // console.log(req.body.timestamp)
  // console.log(vod.timestamps.some(function(timestamp){return timestamp === req.body.timestamp}))
  // if (!vod.timestamps.includes(req.body.timestamp)) {
  //   vod.timestamps.push(req.body.timestamp)
  // } else {
  //   next(new Error('Cannot add duplicate vod'))
  // }
  // // console.log(update);
  // // console.log(vod.update());
  // // _.merge(vod.timestamps, update);
  // // console.log(update);
  // // console.log(vod);

  // vod.save(function(err, saved) {
  //   if (err) {
  //     next(err);
  //   } else {
  //     console.log(saved)
  //     res.json(saved)
  //   }
  // })
  var vod = req.vod;

  Vod.updateOne({_id: req.vod._id},{$addToSet: {timestamps: [req.body.timestamp]}})
  .then(function(vod) {
    res.json(vod);
  }, function(err) {
    next(err);
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
