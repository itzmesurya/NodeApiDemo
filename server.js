var express = require("express")
    /* require 'mongoose' to interact with mongoDB */
    , mongoose = require('mongoose');
var app = express();

// as i have no expertise in mongoDB
// I will just create rest of the stuff needed 
// starting with models

// var bookModel = require('./models/bookModel');

// warning : as we do not have mongoDB setup,
// we are going to get the dummy data

var books = require('./dummyData/books-data.json');

var port = process.env.PORT || 3000;

// in order to better organise and manage the routes
// we are going to create an instance of the router using:

var bookRouter = express.Router();

// create the required routes
bookRouter.route('/Book')
    .get(function (req, res) {
        req.query
        res.json(books);
    });

// now we pass it into the express 'app'
app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('Welcome to my API');
});

app.listen(port, function () {
    console.log('App running on port number : ' + port);
});