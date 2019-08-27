import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      artist: "",
      album: "",
      song: ""
      // userInput: ""
    }
  }

  componentDidMount() {
    axios.get("/api/playlist").then(response => {
      this.setState({playlist: response.data})
    }).catch(err => console.log(err));
  }

  handleClick = () => {
    // console.log(this.state.userInput.split(",").map(val => {
    //   return val.trim();
    // }))
    // const {artist, album, song} = this.state;
    // let body = 
    axios.post("/api/song", {
      artist: this.state.artist,
      album: this.state.album,
      song: this.state.song
    }).then(response => {
      this.setState({playlist: response.data})
    })
  }

  handleChange = e => {
    this.setState({[e.target.placeholder]: e.target.value})
  }

  render() {

      let songArr = this.state.playlist.map(song => {
        return <div>
          <h1>{song.song}</h1>
          <h2>{song.artist}</h2>
          <h3>{song.album}</h3>
        </div>
      })

    return (
      <div>
        <input 
        onChange={this.handleChange}
        placeholder="song"/>
        <input 
        onChange={this.handleChange}
        placeholder="artist"/>
        <input 
        onChange={this.handleChange}
        placeholder="album"/>
        {/* <input 
        onChange={e => this.setState({userInput: e.target.value})}
        placeholder="song, artist, album"
        /> */}
        <button
        onClick={this.handleClick}>Add Song</button>
        {songArr}
      </div>
    )
  }
}

export default App;