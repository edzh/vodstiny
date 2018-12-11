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
  let query = {}

  // if (req.query.date) {
  //   query = req.query;
  //   query.date = {
  //     '$gte': new Date(query.date),
  //     '$lte': new Date(+new Date(query.date) + 24*60*60*1000)
  //   };
  // }

  if (req.query.month) {
    // query = req.query;
    query = {"$expr": { "$eq": [{"$month": "$date"}, parseInt(req.query.month)] }}
  } else { query = req.query }
  console.log(query)

  Vod.find(query)
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
      console.log(newVod);
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
