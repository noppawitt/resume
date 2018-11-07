import React, { Component } from 'react';
import './CLI.css';

class CLI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  onKeyPressed(e) {
    e.persist();

    if (e.keyCode >= 48 && e.keyCode <= 90) {
      this.setState(prevState => ({
        input: prevState.input + e.key,
      }));
    } else if (e.keyCode === 13) {
      this.setState(prevState => ({
        input: prevState.input + '\n',
      }));
    } else if (e.keyCode === 8) {
      this.setState(prevState => ({
        input: prevState.input.substring(0, prevState.input.length - 1),
      }));
    }
  }

  render() {
    return (
      <div className="CLI" tabIndex="1" onKeyDown={this.onKeyPressed}>
        {this.state.input}
        <span className="CLI-cursor">|</span>
      </div>
    );
  }
}

export default CLI;
