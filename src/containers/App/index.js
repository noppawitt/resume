import React, { Component } from 'react';
import './App.scss';
import Landing from '../../components/Landing';
import MenuBar from '../../components/MenuBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MenuBar />
        <Landing />
      </div>
    );
  }
}

export default App;
