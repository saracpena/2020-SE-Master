import React from 'react'

const BlackKeys = (props) => {

    const Csharp = () => {
        props.black.triggerAttackRelease('C#2','8n');
    } 
    const Dsharp = () => {
        props.black.triggerAttackRelease('D#2','8n');
    } 
    const Fsharp = () => {
        props.black.triggerAttackRelease('F#2','8n');
    } 

    return(
        <div id='black-keys'>
            <button id='button' onClick={Csharp}>C#</button>
            <button id='button' onClick={Dsharp}>D#</button>
            <button id='button' onClick={Fsharp}>F#</button>
        </div>
    );
}

export default BlackKeys;