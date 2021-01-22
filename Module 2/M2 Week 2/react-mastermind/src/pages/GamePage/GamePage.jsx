import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';


import {Link} from 'react-router-dom'

const GamePage = (props) => {
    
    return (
      <div className="App">

        <div className="flex-h align-flex-end">
          <GameBoard
            colors={props.colors}
            guesses={props.guesses}
            handlePegClick={props.handlePegClick}
            handleScoreClick={props.handleScoreClick}
          />
          <div className='App-controls'>
            <ColorPicker
              colors={props.colors}
              selColorIdx={props.selColorIdx}
              handleColorSelection={props.handleColorSelection}
            />
            <GameTimer />
            <Link className='btn btn-default' to='/settings'>Difficulty</Link>
            <button className='btn btn-default' onClick={props.toggleInstructions}>How to play</button>
            <NewGameButton handleNewGameClick={props.handleNewGameClick}/>
          </div>
        </div>
        <footer className='App-header-footer'>
          {(props.winTries ? `You Won in ${props.winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
}

export default GamePage;