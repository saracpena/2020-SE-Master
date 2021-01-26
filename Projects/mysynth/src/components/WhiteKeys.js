import React from "react";

const keyboardMap = [
  { note: "C2", octave: "8n", name: "C" },
  { note: "D2", octave: "8n", name: "D" },
  { note: "E2", octave: "8n", name: "E" },
  { note: "F2", octave: "8n", name: "F" },
  { note: "G2", octave: "8n", name: "G" },
  { note: "A2", octave: "8n", name: "A" },
  { note: "B2", octave: "8n", name: "B" },
  { note: "C3", octave: "8n", name: "C" },
];

const WhiteKeys = (props) => {
  const playNote = (note, octave = "8n") => {
    props.synth.triggerAttackRelease(note, octave);
  };

  return (
    <div className="wrapper">
      {keyboardMap.map((el) => (
        <button className ='wrapper-white' key={el.note} onClick={() => playNote(el.note, el.octave)}>
      
        </button>
      ))}
    </div>
  );
};

export default WhiteKeys;

//! Way 1
// import React from 'react'

// const PlaySynth = (props) => {
    
//     const C1 = () => {
//         props.synth.triggerAttackRelease('C2','8n');
//     }
//     const D1 = () => {
//         props.synth.triggerAttackRelease('D2','8n');
//     }
//     const E1 = () => {
//         props.synth.triggerAttackRelease('E2','8n');
//     }
//     const F1 = () => {
//         props.synth.triggerAttackRelease('F2','8n');
//     }
//     const G1 = () => {
//         props.synth.triggerAttackRelease('G2','8n');
//     }
//        return(
//         <div id='white-keys'>
//             <button id='white-keys c' onClick={C1}>C</button>
//             <button id='white-keys d' onClick={D1}>D</button>
//             <button id='white-keys e' onClick={E1}>E</button>
//             <button id='white-keys f' onClick={F1}>F</button>
//             <button id='white-keys g' onClick={G1}>G</button>
//         </div>
//        )
// }

// export default PlaySynth;