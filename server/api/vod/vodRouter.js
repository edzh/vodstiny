var express = require('express');
var controller = require('./vodController');
var router = express.Router();
var createRoutes = require('../../utils/createRoutes');

createRoutes(controller, router);

module.exports = router;
