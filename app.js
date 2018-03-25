//====DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Question = require('./models/questions.js')
const app = express();
const url = process.env.MONGOLAB_URI;

//=========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL QUESTIONS===//
app.get('/api/questions', function(req, res) {
  Question.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW QUEST===//
app.post('/api/questions', function(req, res) {
  Question.create({
    name: req.body.name,
    message: req.body.question,
}).then(question => {
    res.json(question)
  });
});
//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('Starting applicaiton...');

//==========================//
//export MONGOLAB_URI="mongodb://admin:pass@ds123619.mlab.com:23619/questions";
