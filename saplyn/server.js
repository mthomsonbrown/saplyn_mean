'use-strict'
/*global port, mongoose*/

var express = require('express'),
    app = express(),
    port = process.env.PORT, // This is specifically for Cloud9
    url = process.env.IP,
    mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/node', express.static(__dirname + '/node_modules'));

app.listen(port, function() {
    console.log('Express is listening');
});

mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected!');
});