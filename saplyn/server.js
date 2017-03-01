'use-strict'
/*global port, mongoose*/

var express = require('express'),
    app = express(),
    port = process.env.PORT, // This is specifically for Cloud9
    url = process.env.IP,
    mongoose = require('mongoose');

// Routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

// get all todos
app.get('/api/todos', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });

});

// Aliases
app.use('/controllers', express.static(__dirname + '/client/controllers'));
app.use('/node', express.static(__dirname + '/node_modules'));
app.use('/models', express.static(__dirname + '/server/models'));
app.use('/app', express.static(__dirname + '/client'));


app.listen(port, function() {
    console.log('Express is listening');
});

// Database setup
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We\'re connected!');
});

var Todo = mongoose.model('Todo', {
    text: String
});
