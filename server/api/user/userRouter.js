var express = require('express');
var controller = require('./userController');
var router = express.Router();

var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
  .get(checkUser, controller.get)
  .post(controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
