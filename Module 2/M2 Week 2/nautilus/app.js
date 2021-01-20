import React, { Component } from 'react'
import assets, {Component} from 'assets'

export default class app extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.setState({
            this.props.state
        })
    }
    
    
    render() {
        return (
            <div>
            <img src="nautilus_mockup.png"/>
            <p>lorem</p>
            </div>
        )
    }
}


