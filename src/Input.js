import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import './songs';
import { allSongs } from './songs';


export class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
        song: '',
        matching_songs:[],
        selected_song:'',
        selected_songs:[]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    }

  handleClick(event){
      console.log('hey');
    this.setState({selected_song: event.target.value});
    console.log(this.state.selected_song);
    this.state.selected_songs.push(this.state.selected_song);
  }  


  handleChange(event) {
    this.setState({song: event.target.value});
    this.state.song = event.target.value;
    console.log(event.target.value);
    //console.log(this.filter(allSongs,this.state.song));

    this.state.matching_songs=[];

    for (var i=0;i<allSongs.length;i++){
        if(this.state.song=='' || this.state.song==' ' ||  this.state.song=='  '){
            break;
        }
        else{
            if(allSongs[i].includes(this.state.song)==true){
                //console.log(allSongs[i]);
                this.state.matching_songs.push(allSongs[i]);
            }
        }
    }
  }

  render() {
    return (
      <div>
        <form>
            <input type="text" list="songs" value={this.state.song}  onChange={this.handleChange} placeholder="search a song"></input>
                <datalist id="songs" onChange={this.handleClick}>
                    {//IMPOSSIBLE DE METTRE un OnClick sur <option> !!!!
                        this.state.matching_songs.map((song) =>
                        <option key={song} value={song}>{song}</option>
                    )}
                </datalist>
            <div>
                <h4>Results :</h4>
                <ul>
                    {this.state.matching_songs.map((song) => <li key={song}>{song}</li>)}
                </ul>

                <h4>Selected Songs</h4>
                    <ul>
                        {this.state.selected_songs.map((song) => <li key={song}>{song}</li>)}
                    </ul>
            </div>
        </form>
      </div>
    )
  }
}


export default (Input)
