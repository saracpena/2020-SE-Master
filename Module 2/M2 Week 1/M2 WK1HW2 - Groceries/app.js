class App extends React.Component {
    state = {
        groceries,
        item: "",
        brand: "",
        units: ""
    }
    itemChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault()
        console.log("submit");
        const item = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: 1,
            isPurchased: false
        }
        this.setState({
            groceries: [
                item, ...this.state.groceries
            ],
            item: "",
            brand: "",
            units: ""
        })
    }
    render() {
        return (<div>
            <form onSubmit={this.submit}>
                <input id="item" onChange={this.itemChange} type='text' value={this.state.item}></input>
                <input id="brand" onChange={this.itemChange} type='text' value={this.state.brand}></input>
                <input id="units" onChange={this.itemChange} type='text' value={this.state.units}></input>
                <button>submit</button>
            </form>
            <div>
                <ul>
                    {
                        this.state.groceries.map(
                            (grocery) => !grocery.isPurchased
                            ? <li>
                                {grocery.item}</li>
                            : "")
                    }
                </ul>
            </div>
        </div>)
    }
}
const groceries = [
    {
        item: 'ColdBrew',
        brand: 'Starbucks',
        units: '1 liters',
        quantity: 1,
        isPurchased: false
    }, {
        item: 'Cookies',
        brand: 'Chips Ahoy!',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Bacon',
        brand: 'Oscar Meyer',
        units: '1lb',
        quantity: 1,
        isPurchased: true
    }
]
ReactDOM.render(<App/>, document.querySelector('.container'))



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