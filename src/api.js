import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8081/';
const SEARCH_SONG = 't';

export class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
    songs: []
  };
}

  componentDidMount() {
    var { songs } = this.state; 
    axios.get(API + SEARCH_SONG)
      .then(res => {
        songs = res.data;
        this.setState({ songs });
      })
  }

  render() {
    const { songs } = this.state;
    console.log(songs)
    return (
      <p>toto</p>
    )
  }
}


export default (Api);