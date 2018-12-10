import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import './songs';
import { allSongs } from './songs';


export class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {song: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    search (arr, term) {
    var i, indices = [];
    while (i < arr.length) {
      if (arr[i] === term) {
        indices.push(i);
      }
      i++;
        }
    return indices;
    }




  handleChange(event) {
    this.setState({song: event.target.value});
    this.state.song = event.target.value;
    console.log(this.state.song);
    //console.log(this.filter(allSongs,this.state.song));

    console.log(this.search(allSongs,this.state.song));

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.song);
    event.preventDefault();
    console.log(this.state.song);
  }

  render() {
    return (
      <div>
        <form>
            <input type="text" value={this.state.song} onChange={this.handleChange} placeholder="search a song"></input>
        </form>
      </div>
    )
  }
}


export default (Input)
