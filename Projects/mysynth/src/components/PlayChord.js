import React from 'react'
import * as Tone from 'tone'

const PlayChord = (props) => {
    
     const play = () => {
        const now = Tone.now()
        props.chord.triggerAttackRelease("C4", "8n", now)
        props.chord.triggerAttackRelease("E4", "8n", now + 0.5)
        props.chord.triggerAttackRelease("G4", "8n", now + 1)
        props.chord.triggerAttackRelease("B#4", "8n", now + 1.5)
     }
        const rev = () => {
            const now = Tone.now()
        props.chord.triggerAttackRelease("G4", "8n", now)
        props.chord.triggerAttackRelease("E4", "8n", now + 0.5)
        props.chord.triggerAttackRelease("C4", "8n", now + 1)
    }
    return(
        <div className='arpeggios'>
            <button id='button-1' onClick={play}>Major 7 Arpeggio</button>
            <button id='button-1' onClick={rev}>Reverse Major Arpeggio</button>
        </div>
    );
    }

export default PlayChord;