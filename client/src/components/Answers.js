import React from 'react';
import '../QA.css';


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
        return(
          <div key={msg.results}>
            <h3 className="h3msg">{msg.message}</h3>

            <h2 className="h2sig">-{msg.name}</h2>
          </div>
        )
      })
      this.setState({messages: messages});
      console.log("state", this.state.messages);
    })
  }


  render() {
    return (
      <div>
      <p></p>
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
              <h6>Guestbook Messages</h6>
              {this.state.messages}
            </div>
          </div>
          
        </div>
    </div>
    );
  }
}
export default Answers;
