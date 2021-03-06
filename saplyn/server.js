'use strict'

// Imports ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~
var express = require('express'),
    app = express(),
    port = process.env.PORT, // This is specifically for Cloud9
    url = process.env.IP;

// Initialization of Junk ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~
require('./server/routes')(app);
require('./server/db');

// Configuration ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!

app.use('/controllers', express.static(__dirname + '/client/controllers'));
app.use('/node', express.static(__dirname + '/node_modules'));
app.use('/models', express.static(__dirname + '/server/models'));
app.use('/app', express.static(__dirname + '/client'));

// Start Server ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~
app.listen(port, function() {
    console.log('Express is listening');
});

// Root Route ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!
// TODO This should be defined in the routes file probably.  
// ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});
