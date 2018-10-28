var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors')

var VodRouter = require('./api/vod/vodRouter');
var TimestampRouter = require('./api/timestamp/TimestampRouter');
var UserRouter = require('./api/user/UserRouter');
var auth = require('./auth/routes')

var app = express();
var port = 8080;

const db = mongoose.connect('mongodb://localhost:27017/vodstiny')

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

// app.get('/api/videoIds', function(req, res) {
//   res.json(videoIds);
// });

// app.get('/api/videoIds/:videoId', function(req, res) {
//   var video = Object.keys(videoIds.videoIds).filter(videoId => videoId === req.params.videoId)
//   res.json(videoIds.videoIds[video])
// });



app.listen(port, function() {
  console.log(`listening on http://localhost:${port}`);
});
