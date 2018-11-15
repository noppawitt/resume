import React, { Component } from 'react';
import './MenuBar.scss';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <div className="menu">
        <div
          className={`hamburger ${this.state.isOpen ? 'hamburger--close' : ''}`}
          onClick={this.handleClick}
        >
          <div className="hamburger__line hamburger__line1" />
          <div className="hamburger__line hamburger__line2" />
          <div className="hamburger__line hamburger__line3" />
        </div>
        <div
          className={`menu menu__content ${
            this.state.isOpen ? 'menu__content--show' : ''
          }`}
        >
          <div className="menu__item">Profile</div>
          <div className="menu__item">Experience</div>
          <div className="menu__item">Skill</div>
          <div className="menu__item">Contact</div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
