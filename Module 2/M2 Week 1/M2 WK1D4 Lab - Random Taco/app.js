class App extends React.Component {

    render() {
        return(
            <div>
                <h1>The best tacos recipes!!</h1>
                <Shell />
                <Mixin />
                <Condiment />
                <BaseLayer />
            </div>

        )
    }
}

class Shell extends React.Component {
     state = {
        seasoning:'',
        condiment:'',
        mixin:'',
        base_layer:'',
        shell:''

    }
    componentDidMount() {
          fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
            .then(response => {
              return response.json()
            }).then(data => {
                console.log(data),
            this.setState({['shell']: data.shell.recipe })
        })
        }
    render (){
        return (
            <div>
                <h3><pre>{this.state.shell}</pre></h3>
            </div>
        )
    }
}
class Mixin extends React.Component {
     state = {
        seasoning:'',
        condiment:'',
        mixin:'',
        base_layer:'',
        shell:''

    }
    componentDidMount() {
          fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
            .then(response => {
              return response.json()
            }).then(data => {
                console.log(data),
            this.setState({['mixin']: data.mixin.recipe })
        })
        }
    render (){
        return (
            <div>
                <h3><pre>{this.state.mixin}</pre></h3>
            </div>
        )
    }
}

class Condiment extends React.Component {
     state = {
        seasoning:'',
        condiment:'',
        mixin:'',
        base_layer:'',
        shell:''

    }
    componentDidMount() {
          fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
            .then(response => {
              return response.json()
            }).then(data => {
                console.log(data),
            this.setState({['condiment']: data.condiment.recipe })
        })
        }
    render (){
        return (
            <div>
                <h3><pre>{this.state.condiment}</pre></h3>
            </div>
        )
    }
}

class BaseLayer extends React.Component {
     state = {
        seasoning:'',
        condiment:'',
        mixin:'',
        base_layer:'',
        shell:''

    }
    componentDidMount() {
          fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
            .then(response => {
              return response.json()
            }).then(data => {
                console.log(data),
            this.setState({['base_layer']: data.base_layer.recipe })
        })
        }
    render (){
        return (
            <div>
                <h3><pre>{this.state.base_layer}</pre></h3>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'))