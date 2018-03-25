const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const questionsSchema = new Schema({
  name: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Question = mongoose.model('Question', questionsSchema);
module.exports = Question;
