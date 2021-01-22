import React from 'react'
import ReactDOM from 'react-dom'
import * as Tone from 'tone'


const synth = new Tone.MonoSynth().toMaster();
//! Middle C, C4. 8n = 8th note
function playSynth(){
    synth.triggerAttackRelease('C2','8n');
}

const mArpp = new Tone.Synth().toDestination();
const now = Tone.now()

function playChord(){
mArpp.triggerAttackRelease("C4", "8n", now)
mArpp.triggerAttackRelease("E4", "8n", now + 0.5)
mArpp.triggerAttackRelease("G4", "8n", now + 1)
}

function App(){
    return(
        <div id='wrapper'>
            <button id='button' onClick={playSynth}>Play Me</button>
            <button id='button' onClick={playChord}>Click Me</button>
            <button id='button' onClick={playSynth}>Click Me</button>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// ===================
// EXPORT
// ===================

export default App;