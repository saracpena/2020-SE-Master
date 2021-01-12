// console.log(products);
class App extends React.Component {
  
  //constructor() {
  //     super()
  //       this.state = {
  //           products: products,
             //name: ''
  //       }
  // }
  
  state = {
    products: products,
    name: '',
    price: 0,
    description: 'Describe this item',
    isHiring: true,
    cartItems: []
  }
  addToCart = (item) => {
    this.setState({cartItems: [item, ...this.state.cartItems]})
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState({
      products: [newItem, ...products],
      name: '',
      price: 0,
      description: 'Describe this item'
    })
  }
  toggleHiring = () =>{
    this.setState({ isHiring: !this.state.isHiring })
    console.log(this.state.isHiring)
  }
  render () {
    return (
      <div>
        <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
        {!this.state.isHiring ? <h2>Yes, we are hiring </h2> : <h2>Sorry, try again tomorrow</h2>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' value={this.state.name} onChange={this.handleChange} id='name' />
          <br />
          <label htmlFor='price'>Price</label>
          <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
          <br />
          <label htmlFor='description'>Description</label>
          <textarea value={this.state.description} onChange={this.handleChange} id='description' />
          <input type='submit' />
        </form>
        <div className='preview'>
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>
        </div>
        <div className="products">
          <h3>Please Purchase our Excellent Products</h3>
          <ul>
          {this.state.products.map(product => {
            return (
              <ProductList product={product} handleAdd={this.addToCart} />
            )
          }
          )}
        </ul>
        </div>
        <div className='cart'>
          <h3> Shopping Cart </h3>
          <ul>
            {this.state.cartItems.map(item => {
              return (
                <ShoppingCart product={item} />
              )
            }
            )}
          </ul>
        </div>
      </div>
    )
  }
}
// class ProductList extends React.Component {
//   state = {
//     inShoppingCart: false
//   }
    
//   toggleCart = () =>{
//     this.setState({inShoppingCart : !this.state.inShoppingCart })
//   }
//   render () {
//     return (
//       <li onClick={() => this.props.handleAdd(this.props.product)}>{this.props.product.name }  {this.props.product.price} {this.state.inShoppingCart ? <span> is in the shopping cart! </span> : ''}</li>
//     )
    
//   }
// }
// class ShoppingCart extends React.Component {
//   render () {
//     return (
//       <li>{this.props.product.name }  {this.props.product.price}</li>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
