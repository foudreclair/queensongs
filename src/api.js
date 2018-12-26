import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8081/';
const SEARCH_SONG = 't';

export class Api extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        songs: [],
        isLoading: false,
        error: null,
      };
    }
  
    componentDidMount() {
      this.setState({ isLoading: true });
  
      fetch(API + SEARCH_SONG)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ songs: data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    render() {
      const { songs, isLoading, error } = this.state;
      console.log(songs)
      if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }
  
      return (
          <p>toto</p>
       
      );
      
    }
  }

export default (Api);