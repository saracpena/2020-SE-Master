import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal')

class Portal extends Component {
    
    newElement = document.createElement('div')
    
    componentDidMount = () => {
        portalRoot.appendChild(this.newElement)
    
    }
    //removes itself
    componentWillUnmount (){
        portalRoot.removeChild(this.newElement)
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.newElement)
    }


}
export default Portal;

// 1. Create a new div element
// 2. We append the elements to  the DOM when it mounts
// 3. We remove