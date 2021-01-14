//! DATA //
const receipts = [
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Horchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Horchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
  ]
  
  // const receipts = [receipt1, receipt2, receipt3];

//! COMPONENTS //
// console.log(receipts);
// console.log(receipts[0].order);

class App extends React.Component {
    state = {
            // receipt1: receipt1,
            // receipt2: receipt2,
            // receipt3: receipt3
            receipts
    }
  render () {
    //   this.state.receipts.forEach(element => {
    //       console.log(element);
    //   });
      return(
          <div>
              <h1 className="truck-name">Korilla</h1>
              <div>
                {this.state.receipts.map( (receipt) => !receipt.paid ? <Receipt receipt= {receipt}/> : null)}
                        {/* {!this.state.receipt2.paid ? <Receipt receipt= {this.state.receipt2}/> : ""}
                        {!this.state.receipt3.paid ? <Receipt receipt= {this.state.receipt3}/> : ""} */}
                {/* <Receipt /> */}
              </div>
          </div>
      )
  }
}

class Receipt extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div >
                <h2>{this.props.receipt.person}</h2>
                <ul>
                <li><span>Main: </span>{this.props.receipt.order.main}</li>
                <li><span>Protein: </span>{this.props.receipt.order.protein}</li>
                <li><span>Rice: </span>{this.props.receipt.order.rice}</li>
                <li><span>Sauce: </span>{this.props.receipt.order.sauce}</li>
                <li><span>Drink: </span>{this.props.receipt.order.drink}</li>
                <li><span>Cost: </span>{this.props.receipt.order.cost}</li>
                </ul>
            </div>
        )
    }
}


//! Defining a component in this way creates a stateless functional component
//! think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data.

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )