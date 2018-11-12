var router = require('express').Router();
var verifyUser = require('./auth').verifyUser;
var controller = require('./controller');

router.post('/login', verifyUser(), controller.login);

module.exports = router;
