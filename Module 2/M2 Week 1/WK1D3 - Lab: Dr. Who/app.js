//! STATE-FUL = state is data we import — typically to show the user — that is subject to change
//! Container vs Presentational vs Smart components, stateful components are keeping track of changing data

//! STATE-LESS =  Dumb components, stateless components print out what is given to them via props, 
//! or they always render the same thing.

//! As cool as state is, you should always aim to make your components as simple and stateless as possible, 
//! so different components can be reused like Lego pieces, even if you don’t have immediate plans to reuse a component.

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
                <button>submit me dammit</button>
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
        item: 'Soda',
        brand: 'Sprite',
        units: '2 liters',
        quantity: 1,
        isPurchased: false
    }, {
        item: 'Chips',
        brand: 'Pringles',
        units: '3 oz',
        quantity: 1,
        isPurchased: true
    }, {
        item: 'Cookies',
        brand: 'Thin Oreos',
        units: '16 oz',
        quantity: 1,
        isPurchased: true
    }
]
ReactDOM.render(<App/>, document.querySelector('.container'))


// //! Defining a component in this way creates a stateless functional component
// //! think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.