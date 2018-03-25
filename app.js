// DEPENDENCIES
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Question = require('./models/questions.js')
const app = express();
const url = process.env.MONGOLAB_URI;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// MONGOOSE CONNECT
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// GET ALL QUESTIONS
app.get('/api/questions', function(req, res) {
  Question.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })

// POST NEW QUEST
app.post('/api/questions', function(req, res) {
  Question.create({
    name: req.body.name,
    message: req.body.question,
}).then(question => {
    res.json(question)
  });
});

// APP LISTENER
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`QA listening on ${port}`);

//export MONGOLAB_URI="mongodb://admin:pass@ds123619.mlab.com:23619/questions";
