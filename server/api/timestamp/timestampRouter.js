// var express = require('express');
// var Timestamp = require('./timestampModel');
// var timestampRouter = express.Router();

// timestampRouter.get('/', function(req, res) {
//   Timestamp.find({}, function(err, timestamps) {
//     res.json(timestamps)
//   })
// })

// timestampRouter.post('/post', function(req, res) {
//   var timestamp = new Timestamp({
//     vodId: '311111',
//     date: '09/20/2019',
//     timestamps: [
//       {
//         timestamp: '0:00:00',
//         topic: 'hello',
//         category: 'goodbye'
//       }
//     ]
//   });

//   timestamp.save();
//   res.status(201).send(timestamp);
// })

// module.exports = timestampRouter;

var router = require('express').Router();
var controller = require('./timestampController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
