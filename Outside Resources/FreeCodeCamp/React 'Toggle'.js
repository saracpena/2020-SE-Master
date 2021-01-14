//! React: Use State to Toggle an Element

//? Sometimes you might need to know the previous state when updating the state. 
//? However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. 
//? This means you can't rely on the previous value of this.state or this.props when calculating the next value. 
//? So, you should not use code like this:

// this.setState({
//     counter: this.state.counter + this.props.increment
//   });

//? Instead, you should pass setState a function that allows you to access state and props. 
//? Using a function with setState guarantees you are working with the most current values of state and props. 
//? This means that the above should be rewritten as:
  
//   this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));
  
//? You can also use a form without props if you need only the state:
  
//   this.setState(state => ({ //!Note that you have to wrap the ({object literal}) in parentheses, otherwise JavaScript thinks it's a block of code.
//     counter: state.counter + 1
//   }));
  
  
//? MyComponent has a visibility property which is initialized to false. 
//? The render method returns one view if the value of visibility is true, and a different view if it is false.
  
//? Currently, there is no way of updating the visibility property in the component's state. 
//? The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility(). 
//? Pass a function to setState to define this method so that the state of visibility toggles to the opposite value when the method is called. 
//? If visibility is false, the method sets it to true, and vice versa.
  
//? Finally, click the button to see the conditional rendering of the component based on its state.
  
//! Hint: Don't forget to 'bind' the this keyword to the method in the constructor!
        //TODO this.toggleVisibility = this.toggleVisibility.bind(this);


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Change code below this line
/*MyComponent         //!toggle function           //** within 'toggle' function */ 
    this.toggleVisibility = this.toggleVisibility.bind(this);
      // Change code above this line
    }
    // Change code below this line
    toggleVisibility() {
      this.setState (function(state){
        if (state.visibility === true){
          return {visibility: false};
        }else {
          return {visibility: true};
        }
      });
    }
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }