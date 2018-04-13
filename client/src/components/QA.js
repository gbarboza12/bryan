import React from 'react';
import '../css/QA.css'
import Answers from './Answers.js'
const axios = require('axios');


class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      question: '',
      answer: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  addToQA = event => {
     alert("Question submitted!");

     event.preventDefault();
     this.setState({
        name: event.target.value,
        question: event.target.value,
     });

      axios.post('https://bryancito.herokuapp.com/api/questions', {
        name: this.state.name,
        question: this.state.question,
        answer: this.state.answer
     })
      .then(response => {
        console.log(response, 'Question added!');
      })
      .catch(function (error) {
                if (error.response) {
                    console.log('Error data : ', error.response.data);
                    console.log('Error status : ', error.response.status);
                    console.log('Error headers : ', error.response.headers);
                } else if (error.request) {
                    console.log('Error request : ', error.request);
                } else {
                    console.log('Error message : ', error.message);
                }
                console.log(error.config);
            });

      this.setState({
        name: "",
        question: "",
      });
  };

  render() {
    return (
      <div class="content">
        <div class="question-content">
         Feel free to ask me any question. If I have time, I will ask my
         publicist to answer it.
         </div>

         <div class="form">
            <form className="demoForm">
               <div className='form-group'>
                 <input type="text" name="name" required className="form-control" placeholder="Name"
                  value={this.state.name} onChange={this.handleName} />
               </div>

               <div className={`form-group`}>
                 <textarea type="text" name="question" required className="form-control" placeholder="Question"
                   value={this.state.question} onChange={this.handleQuestion}/>
               </div>

               <button type="submit" className="btn btn-qa btn-block" onClick={this.addToQA}>Submit</button>
            </form>
         </div>

         <Answers />
      </div>
    );
  }
}

export default QA;
