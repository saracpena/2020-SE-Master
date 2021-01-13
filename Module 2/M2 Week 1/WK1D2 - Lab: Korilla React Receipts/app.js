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
                {this.state.receipts.map( (receipt) => !receipt.paid ? <Receipt receipt= {receipt}/> : "")}
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