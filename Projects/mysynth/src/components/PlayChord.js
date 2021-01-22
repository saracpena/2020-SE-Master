import React from 'react'
import * as Tone from 'tone'

const PlayChord = (props) => {
    
     const play = () => {
        const now = Tone.now()
        props.chord.triggerAttackRelease("C4", "8n", now)
        props.chord.triggerAttackRelease("E4", "8n", now + 0.5)
        props.chord.triggerAttackRelease("G4", "8n", now + 1)
    }
    return(
        <div id='wrapper'>
            <button id='button' onClick={play}>Major Arppegio</button>
        </div>
    );
    }

export default PlayChord;