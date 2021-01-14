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
  render() {
      return (<div onClick= { () => this.changeIt(this.state.tardis.name)}>
          <DivOne datta={this.state.tardis.name}/>
      </div>)
  }
}
class DivOne extends React.Component {
  render() {
      return (<div>
          <DivTwo datta={this.props.datta}/>
      </div>)
  }
}
class DivTwo extends React.Component {
  render() {
      return (<div>
          <DivThree datta={this.props.datta}/>
      </div>)
  }
}
class DivThree extends React.Component {
  render() {
      return (<div>
          <DivFour datta={this.props.datta}/>
      </div>)
  }
}
class DivFour extends React.Component {
  render() {
      return (<div>
          <h3>{this.props.datta}</h3>
      </div>)
  }
}
ReactDOM.render(<App/>, document.querySelector('.container'));







// import Tardis1 from './components/Tardis1';
// import Tardis2 from './components/Tardis2';
// import Tardis3 from './components/Tardis3';

// //! DATA //
// const tardis = [{
//         name: 'Time and Relative Dimension in Space',
//         caps: false
//       }]

// //! COMPONENTS //

// class App extends React.Component {
//     // contructor(props)
//     // super(props)
//     state={
//       tardis
//   }
//   render () {
//       return(
//           <div>
//               <h3>{this.state.props.name}</h3>
//           </div>
//       )
//   }
// }


// // changeIt = (text) => {
// //   if (this.state.tardis.caps) {
// //     this.setState({
// //       tardis: {
// //         name: text.toLowerCase(),
// //         caps: false
// //       }
// //     })
// //   } else {
// //     this.setState({
// //       tardis: {
// //         name: text.toUpperCase(),
// //         caps: true
// //       }
// //     })
// //   }
// // }



// //! Defining a component in this way creates a stateless functional component
// //! think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.

// ReactDOM.render(
//   <App />,
//   document.querySelector('.container')
// )