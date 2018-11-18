var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors')
var config = require('./config/config')

var VodRouter = require('./api/vod/vodRouter');
var TimestampRouter = require('./api/timestamp/timestampRouter');
var UserRouter = require('./api/user/userRouter');
var auth = require('./auth/routes')

require('mongoose').connect(config.db.url);

var app = express();

app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.set('json spaces', 2);

app.use('/api/vods', VodRouter);
app.use('/api/timestamps', TimestampRouter);
app.use('/api/users/', UserRouter);
app.use('/auth', auth);

app.listen(config.port, function() {
  console.log(`listening on http://localhost:${config.port}`);
});
