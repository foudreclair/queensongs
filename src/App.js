import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
import { Api } from './api';
import SelectedSongs from './SelectedSongs';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selected_song:''
    }
    this.callbackChild=this.callbackChild.bind(this);
  }

  callbackChild = (song) => {
    this.child.incrementSong(song)
    this.setState({selected_song:song})

  }

  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>

        <Input/>
        <Api/>
      </div>
      <div className="App">
        <p>this app is a form in order to search songs</p>
        <div className="container row">
        <Input className="col-sm"
          callbacksong={this.callbackChild.bind(this)}
        />
        <SelectedSongs className="col-sm"
          onRef={ref => (this.child = ref)}
          selected_song={this.state.selected_song}
        />
        </div>
      </div>

    );
  }
}

export default App;
