import React from 'react'

const BlackKeys = (props) => {

    const Csharp = () => {
        props.black.triggerAttackRelease('C#2','4n');
    } 
    const Dsharp = () => {
        props.black.triggerAttackRelease('D#2','4n');
    } 
    const Fsharp = () => {
        props.black.triggerAttackRelease('F#2','4n');
    } 

    return(
        <div className='bKey'>
            <button className='black-keys1' onClick={Csharp}>C#</button>
            <button className='black-keys2' onClick={Dsharp}>D#</button>
            <button className='black-keys3' onClick={Fsharp}>F#</button>
        </div>
    );
}

export default BlackKeys;