import React, { Component } from 'react'
import './songs';
import { allSongs } from './songs';
import axios from 'axios';

export class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            matching_songs: [],
            selected_song: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event){

        this.setState({ selected_song: event.target.innerHTML })
        this.props.callbacksong(event.target.innerHTML)
    
    }

    handleChange(event) {
        const song = event.target.value.trim();
        var array_songs = [];

        const API = 'http://localhost:8081/'
        const SEARCH_SONG = song
        
        if(song !== ''){
            axios.get(API + SEARCH_SONG)
            .then(res => {
              array_songs = res.data
              this.setState({ matching_songs: array_songs });
            }).catch(err =>{
              console.log(err)
            })
        }
        else{
            this.setState({matching_songs:[]})
        }
        
    }

    render() {
        return (
            <div className="col-md-6">
                <form className="">
                    <input type="text" list="songs" value={this.song} onChange={this.handleChange} placeholder="search a song"></input>
                    <div>
                        <h4>Results :</h4>
                        <ul>
                            {this.state.matching_songs.map((song2) => <li onClick={this.handleClick} key={song2} value={song2}>{song2}</li>)}
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default (Input)
