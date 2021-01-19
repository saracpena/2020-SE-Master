//! STATE-FUL = state is data we import — typically to show the user — that is subject to change
//! Container vs Presentational vs Smart components, stateful components are keeping track of changing data

//! STATE-LESS =  Dumb components, stateless components print out what is given to them via props, 
//! or they always render the same thing.

//! As cool as state is, you should always aim to make your components as simple and stateless as possible, 
//! so different components can be reused like Lego pieces, even if you don’t have immediate plans to reuse a component.

//! WAY ONE

class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false
        }
    }
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() { //anonymous arrow function?
        return (<div onClick= { () => this.changeIt(this.state.tardis.name)}>
            <DivOne data={this.state.tardis.name}/> 
        </div>)
    }
  }//! Daisy Chaining with this

  //! Daisy changing using variable created in LINE 36
  class DivOne extends React.Component {
    render() {
        return (<div>
            <DivTwo data={this.props.data}/>
        </div>)
    }
  }
  class DivTwo extends React.Component {
    render() {
        return (<div>
            <DivThree data={this.props.data}/>
        </div>)
    }
  }
  class DivThree extends React.Component {
    render() {
        return (<div>
            <DivFour data={this.props.data}/>
        </div>)
    }
  }
// class DivThree extends React.Component {
//     render () {
//         return(
//         <div onClick= {() => this.changeIt(this.state.tardis.name)}>
//             <div>
//              <h3>Welcome to </h3>
//             </div>
//              <div onClick= { () => this.changeIt(this.state.tardis.name)}>
//              <h3>Tardis</h3>
//             </div>
//         </div>
//         )
//     }
// }
  class DivFour extends React.Component {
    render() {
        return (<div>
            <h3>{this.props.data}</h3>
        </div>)
    }
  }

ReactDOM.render(<App/>, document.querySelector('.container'));



// //! Defining a component in this way creates a stateless functional component
// //! think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.