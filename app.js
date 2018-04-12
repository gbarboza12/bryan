// DEPENDENCIES
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Question = require('./models/questions.js')
const app = express();
const url = process.env.MONGOLAB_URI;
const cors = require('cors');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// mongoose connection
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});


// get all questions
app.get('/api/questions', cors(), function(req, res) {
  Question.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })

// post new question
app.post('/api/questions', cors(), function(req, res) {
  Question.create({
    name: req.body.name,
    message: req.body.question,
    answer: req.body.answer
}).then(question => {
    res.json(question)
  });
});

app.post('/sms', function (req, res) {
  const body = req.body.Body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
})

// app listener
const port = process.env.PORT || 5000;
app.listen(port);
app.use(cors());

console.log(`QA listening on ${port}`);

//export MONGOLAB_URI="mongodb://admin:pass@ds123619.mlab.com:23619/questions";
