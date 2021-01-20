// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react'; 
// data
import playlist from './data.js'
console.log(playlist)


// ===================
// COMPONENT : constructor() super() this.state = {}
// ===================
class App extends Component {
  state = {
      playlist: playlist,
      title: '',
      artist: '',
      time: ''
    }
  }
  handleChange = (e) => {
    this.setState( { [e.target.id]: e.target.value } )
    //! this.handleChange = this.handleChange.bind(this) -w/ arrow func (auto-binds) you don't need this line
  }
  //! forgoing '.bind' with => | this.handleSubmit = this.handleSubmit.bind(this) -w/ arrow func (auto-binds) you don't need this line
  handleSubmit = (e) => {
    // prevents default behavior of submitting a form
    e.preventDefault()
    // creating the new song OBJECT based off user input 
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    // creating the new ARRAY based off our newSong and the current playlist song array 
    const newSongArray = [newSong, ...this.state.playlist.songs]
    // set the state with the newSongArray and resetting the title/artist/time values back to empty strings to clear the inputs 
    this.setState({
      playlist: {
          created: this.state.playlist.created,
          title: this.state.playlist.title,
          songs: newSongArray
      },
      title: '',
      artist: '',
      time: ''
    })
    
  }

// ===================
// Displaying Our Data : 
// TODO: create a <div> next to 'tunr-container' with a class of 'playlist' to hold the playlist
// TODO: create an <h1> inside the playlist <div> that will display the name of the playlist
// TODO: create a <div> inside the playlist <div> with a class of 'songs' to HOLD ALL THE SONGS
// TODO: create a <div> inside the songs <div> with a class of 'song' that will display INFO FOR ONE SONG
  //? Each song has a title, artist, time. Display them in that order decreasing <h> sizes
// ===================

  render() {
    return (
      <div className="tunr-container">
        <header>
          <h1>Tunr.</h1>
          <h2>For all your playlist needs</h2>
        </header>
        <div className="playlist">
          <h1>{this.state.playlist.title}</h1>
          <div className="songs">
            {this.state.playlist.songs.map ((song, index) => {
              return(
                <div className="song" key={index}>
                  <h1>{song.title}</h1>
                  <h2>{song.artist}</h2>
                  <h3>{song.time}</h3>
                </div>
              )
            })}
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>title</label>
          <input type='text' value={this.state.title} onChange={this.handleChange} id='title'/>
          <label htmlFor='artist'>artist</label>
          <input type='text' value={this.state.artist} onChange={this.handleChange} id='artist'/>
          <label htmlFor='time'>time</label>
          <input type='text' value={this.state.time} onChange={this.handleChange} id='time'/>
          <input type='submit' value='add new song' />
        </form>
    </div>
    );
  }

// ===================
// EXPORT
// ===================
export default App;

//! FAT ARROW FUNCTIONS:
// => functions have two major benefits:
//*- a very clean concise syntax and more intuitive scoping and this binding