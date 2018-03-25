import React from 'react';
import '../App.css';
import { Well, Fade } from 'react-bootstrap';

class Answers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <a href="#" onClick={() => this.setState({ open: !this.state.open })}>
          Click to see questions that I have already answered.
        </a>
        <Fade in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Well>
          </div>
        </Fade>
      </div>
    );
  }
}
export default Answers;
