const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const questionsSchema = new Schema({
  name: String,
  question: String
  },
})

const Question = mongoose.model('Question', questionsSchema);
module.exports = Question;
