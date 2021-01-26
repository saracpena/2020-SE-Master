import React from 'react'

const BlackKeyMap = [
      { note: "C#2", octave: "8n", name: "C#" },
      { note: "D#2", octave: "8n", name: "D#" },
      { note: "F#2", octave: "8n", name: "F#" },
      { note: "G#2", octave: "8n", name: "G#" },
      { note: "A#2", octave: "8n", name: "A#" },
]

const BlackKeys = (props) => {
     const sharpNote = (note, octave = "8n") => {
            props.black.triggerAttackRelease(note, octave);
          };
        
          return (
            <div className="bkcontainer">
              {BlackKeyMap.map((el) => (
                <button className ='black-keys' key={el.note} onClick={() => sharpNote(el.note, el.octave)}>
                
                </button>
              ))}
            </div>
          );
        };

export default BlackKeys

//     const Csharp = () => {
//         props.black.triggerAttackRelease('C#2','4n');
//     } 
//     const Dsharp = () => {
//         props.black.triggerAttackRelease('D#2','4n');
//     } 
//     const Fsharp = () => {
//         props.black.triggerAttackRelease('F#2','4n');
//     } 

//     return(
//         <div className='bKey'>
//             <button className='black-keys1' onClick={Csharp}>C#</button>
//             <button className='black-keys2' onClick={Dsharp}>D#</button>
//             <button className='black-keys3' onClick={Fsharp}>F#</button>
//         </div>
//     );
// }

