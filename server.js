var express = require('express');
var bodyParser = require('body-parser');
var videoIds = require('./src/data/videoIds');

var app = express();
var port = 8080;

app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/videoIds', function(req, res) {
  res.json(videoIds);
});

app.get('/api/videoIds/:videoId', function(req, res) {
  var video = Object.keys(videoIds.videoIds).filter(videoId => videoId === req.params.videoId)
  res.json(videoIds.videoIds[video])
})



app.listen(port, function() {
  console.log(`listening on http://localhost:${port}`);
});
