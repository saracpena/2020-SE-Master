const message = 'Hello World'

//! Vanilla JS
/* document.addEventListener("DOMContentLoaded", () => {
        const div = document.querySelector('.container')
        div.innerHTML = '<h1>' + message + '<h1>'

}) */

//! REACT

// ReactDOM.render(
//     <h1>{message}</h1>,
//     document.querySelector('.container')
// )

class Player extends React.Component {
    render() {
        return (
            <div className={this.props.whichPlayer}>
                <h2>Player {this.props.className}</h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>React Tic Tac Toe</h1>
        )
    }
}

//? 42-44 Contents from Player

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Player className='O' />
                <Player className='X'/>
                <Board />
            </div>
        )
    }
}

class Square extends React.Component {
    render () {
      return (
        <div>
          <h4>square</h4>
        </div>
      )
    }
  }

class Board extends React.Component {
    render () {
      return (
        <div className='board'>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)