var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
	res.sendFile('static/index.html');
});

var http = require('http').Server(app);
var io = require('socket.io')(http);

var server = http.listen(process.env.PORT ? process.env.PORT : 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
