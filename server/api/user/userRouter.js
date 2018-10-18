var express = require('express');
var controller = require('./userController');
var router = express.Router();
var createRoutes = require('../../utils/createRoutes');

createRoutes(controller, router);

module.exports = router;
