'use-strict'
/*global port*/

var express = require('express'),
    app = express()
    port = process.env.PORT; // This is specifically for Cloud9

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/bower', express.static(__dirname + '/bower_components'));

app.listen(port, function() {
    console.log('Express is listening');
});