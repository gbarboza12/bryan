import React from 'react';
import '../App.css'
const axios = require('axios');

//TODO put form in separate file form.js

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      question: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //  const name = event.target.name;
  //  const value = event.target.value;
  //  this.setState({
  //     [name]: value
  //   });
  // }
  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  addToQA = event => {
     event.preventDefault();
     this.setState({
        name: event.target.value,
        question: event.target.value,
     });

      axios.post('https://bryancito.herokuapp.com/api/signatures', {
        name: this.state.name,
        question: this.state.question,
      })
      .then(response => {
        console.log(response, 'Question added!');
      })
      .catch(err => {
        console.log(err, 'Question not added, try again');
      });

      this.setState({
        SignatureOfGuest: "",
        MessageofGuest: "",
      });
  };

  render() {
    return (
      <div class="container-fluid text-center">
      <p>Feel free to ask me any question. If I have time, I will ask my
      publicist to answer it. </p>
      <form className="demoForm" onSubmit={this.handleSubmit}>
         <div className='form-group'>
           <label htmlFor="name">Name</label>
           <input type="text" required className="form-control" placeholder="Name"
            value={this.state.value} onChange={this.handleName} />
         </div>
         <div className={`form-group`}>
           <label htmlFor="question">Question</label>
           <textarea type="text" required className="form-control" placeholder="Question"
             value={this.state.value} onChange={this.handleQuestion}/>
         </div>
         <button type="submit" className="btn btn-primary" onClick={this.addToQA}>Submit</button>
      </form>

      </div>
    );
  }
}

export default QA;
