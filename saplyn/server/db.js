'use strict'

var url = 'mongodb://localhost:27017/test',
    mongoose = require('mongoose');

mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We\'re connected!');
});
