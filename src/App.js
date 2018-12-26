import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import SelectedSongs from './SelectedSongs';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>this app is a form to search songs</p>

        <Input/>
        <SelectedSongs/>
      </div>

    );
  }
}

export default App;
