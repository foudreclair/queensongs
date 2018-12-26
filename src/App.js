import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Input';
import { Api } from './api';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>this app is a form to search songs</p>

        <Input/>
        <Api/>
      </div>

    );
  }
}

export default App;
