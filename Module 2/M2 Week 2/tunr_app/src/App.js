// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react'; 
// data
import playlist from './data.js'
console.log(playlist)


// ===================
// COMPONENT
// ===================
class App extends Component {
  constructor() {
    super()
    this.state = {
      playlist: playlist,
      title: '',
      artist: '',
      time: ''
    }
  }
  handleChange(e) {
    this.setState( { [e.target.id]: e.target.value } )
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    // prevents default behavior of submitting a form
    e.preventDefault()
    // creating the new song object based off user input 
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    // creating the new array based off our newSong and the current playlist song array 
    const newSongArray = [newSong, ...this.state.playlist.songs]
    // set the state  with the newSongArray and resetting the title/artist/time values back to empty strings to clear the inputs 
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
          <input type='text' value={this.state.title} id='title'/>
          <label htmlFor='artist'>artist</label>
          <input type='text' value={this.state.artist} id='title'/>
          <label htmlFor='time'>time</label>
          <input type='text' value={this.state.time} id='time'/>
          <input type='submit' value='add new song' />
        </form>
    </div>
    );
  }
}

// ===================
// EXPORT
// ===================
export default App;