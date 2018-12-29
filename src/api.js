import React from 'react';

import axios from 'axios';

export default class Api extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('hey')
    axios.get(`localhost:8801/`+'a')
      .then(res => {
        console.log(res)
        const persons = res.data;
        this.setState({ persons });
      }).catch(res =>{
        console.log(res)
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}