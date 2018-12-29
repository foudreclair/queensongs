import React, { Component } from 'react';
import './App.css';
import { Input } from './Input';
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

      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>

        <p>this app is a form in order to search songs</p>
        <div className="container row">
        <Input
          callbacksong={this.callbackChild.bind(this)}
        />
        <SelectedSongs
          onRef={ref => (this.child = ref)}
          selected_song={this.state.selected_song}
        />

        </div>
      </div>

    );
  }
}

export default App;
