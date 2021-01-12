class ShoppingCart extends React.Component {
    render () {
      return (
        <li>{this.props.product.name }  {this.props.product.price}</li>
      )
    }
  }