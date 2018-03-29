import React from 'react';
import '../QA.css'
import Answers from './Answers.js'
const axios = require('axios');


class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      question: ''
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
     })
      .then(response => {
        alert(response, 'Question added!');
      })
      .catch(function (error) {
                if (error.response) {
                    alert('Error data : ', error.response.data);
                    alert('Error status : ', error.response.status);
                    alert('Error headers : ', error.response.headers);
                } else if (error.request) {
                    alert('Error request : ', error.request);
                } else {
                    alert('Error message : ', error.message);
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
      <div class="container-fluid">
      <p>Feel free to ask me any question. If I have time, I will ask my
      publicist to answer it. </p>
      <form className="demoForm">
         <div className='form-group'>
           <label htmlFor="name">Name</label>
           <input type="text" name="name" required className="form-control" placeholder="Name"
            value={this.state.name} onChange={this.handleName} />
         </div>

         <div className={`form-group`}>
           <label htmlFor="question">Question</label>
           <textarea type="text" name="question" required className="form-control" placeholder="Question"
             value={this.state.question} onChange={this.handleQuestion}/>
         </div>

         <button type="submit" className="btn btn-primary" onClick={this.addToQA}>Submit</button>
      </form>
      <Answers />
      </div>


    );
  }
}

export default QA;
