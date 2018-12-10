import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Input';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>this app is a form to search songs</p>

        <Input/>
      </div>

    );
  }
}

export default App;
