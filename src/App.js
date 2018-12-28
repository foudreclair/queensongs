import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import SelectedSongs from './SelectedSongs';

class App extends Component {
  selected_song;


  render() {
    return (
      <div className="App">
        <p>this app is a form to search songs</p>

        <Input listNameFromParent={selected_song}/>
        <SelectedSongs        
        />
      </div>

    );
  }
}

export default App;
