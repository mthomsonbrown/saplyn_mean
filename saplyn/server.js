'use strict'
/*global port, mongoose*/

// Imports ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~
var express = require('express'),
    app = express(),
    port = process.env.PORT, // This is specifically for Cloud9
    url = process.env.IP,
    database = require('./server/database'),
    mongoose = require('mongoose');

// Routes ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!
require('./server/routes')(app);

// Configuration ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!
mongoose.connect(database.url);
app.use('/controllers', express.static(__dirname + '/client/controllers'));
app.use('/node', express.static(__dirname + '/node_modules'));
app.use('/models', express.static(__dirname + '/server/models'));
app.use('/app', express.static(__dirname + '/client'));

// Start Server ~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~~!~~~!~
app.listen(port, function() {
    console.log('Express is listening');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We\'re connected!');
});

