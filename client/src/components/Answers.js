import React from 'react';
import '../css/QA.css';


class Answers extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messages: "",
    };
  }

  componentDidMount() {
     fetch('https://bryancito.herokuapp.com/api/questions')
     .then(results => {
     return results.json();
  }).then(data => {
      let messages =
      data.map((msg) => {
        var answer="";
        if(msg.answer === "") {
          answer="This question has not been answered.";
        } else {
          answer = msg.answer;
        }
        return(
          <div class="qa-block" key={msg.results}>
            <span class="q-sign">Q: </span>
            <span class="question-text">{msg.message}</span>
            <h4 class="name-text">-{msg.name}</h4>
            <span class="a-sign">A: </span>
            <span class="question-text">{answer}</span>

          </div>
        )
      })
      this.setState({messages: messages});
      console.log("state", this.state.messages);
    })
  }


  render() {
    return (
      <div class="answers">
        <div class="panel-group" id="accordion">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                  Click to see questions that I have already answered.
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse ">
              <div class="panel-body">
                {this.state.messages}
              </div>
            </div>
          </div>
    </div>
    );
  }
}
export default Answers;
