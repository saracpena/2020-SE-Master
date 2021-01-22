import {Component} from 'react'
import PlayChord from './components/PlayChord'
import PlaySynth from './components/PlaySynth'
import * as Tone from 'tone'

class App extends Component{
    state = {
        synth: new Tone.MonoSynth().toMaster(),
        chord: new Tone.Synth().toDestination()
    }
    render(){
    return(
        <div > 
            <PlaySynth synth={this.state.synth}/>
            <PlayChord chord={this.state.chord} />   
        </div>
    );
    }
}



//! Middle C, C4. 8n = 8th note




// function Chords()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// ===================
// EXPORT
// ===================

export default App;