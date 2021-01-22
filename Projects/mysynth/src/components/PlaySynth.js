import React from 'react'

const PlaySynth = (props) => {
    
    const play = () => {
        props.synth.triggerAttackRelease('C2','8n');
    }
       return(
        <div id='wrapper'>
            <button id='button' onClick={play}>Click Me</button>
        </div>
       )
}

export default PlaySynth;