import React, { Component } from 'react'

export default class SelectedSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_song: '',
      selected_songs: []
  }
  this.incrementSong = this.incrementSong.bind(this)
  this.handleClick = this.handleClick.bind(this)
}
  
  componentDidMount() {
    this.props.onRef(this)
}
  remove(arr, what) {
    var found = arr.indexOf(what);

    while (found !== -1) {
      arr.splice(found, 1);
      found = arr.indexOf(what);
    }
  }


  handleClick(event){
    this.remove(this.state.selected_songs,event.target.value)
    this.setState({selected_songs:this.state.selected_songs})
  }

  incrementSong(song){
    var found = this.state.selected_songs.includes(song);
    if(found === false){
      this.state.selected_songs.push(song)
      this.setState({selected_songs:this.state.selected_songs})
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <h4>Selected Songs</h4>
        <ul>
            {this.state.selected_songs.map(
              (song) =>
              <div>
                <li value={song} key={song}>{song}
                  <button value={song} onClick={this.handleClick}>remove</button>
                </li>
              </div>
              )}
        </ul>
      </div>
    )
  }
}