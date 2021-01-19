ReactDOM.render(
    <App />,
    document.querySelector('.container')
)

class App extends React.Component {
    state = {
        baseURL: 'http://jservice.io/api/random',
        question:[],
        category: {
            title: ''},
        toggleAnswer: false,
        score: 0
    }
    GetQuestion() {
          fetch(this.state.baseURL)
            .then((response) => response.json())
              //! returns in JSON
            .then(json => this.setState({
            question: json,
              //!clearing the field for new entry below,
            score: 0
        }),
        //! Outputs an error message to the Web Console.
            err => console.log(err))
    }

    toggleAnswer() {
        this.setState({toggleAnswer: !this.state.toggleAnswer});
    }

    addScore() {
     const score = (this.state.question.filter(val => (val.value)));
     let updateScore = parseInt(score) + parseInt(this.state.score);
     this.setState({
       score: updateScore});
    }

    subScore() {
        const score = (this.state.question.filter(val => (val.value)));
        let updateScore = parseInt(score) - parseInt(this.state.score);
        this.setState({
            score: updateScore});  
    }        
}

render () {
    //another way to write this: const {showHideAnswer} = this.state :is
      //const  showHideAnswer = this.state.showHideAnswer;
      const {showHideAnswer} = this.state;
      const question = (this.state.question.map(question => (question.question)));
      const title = (this.state.question.map(title => (title.category.title)));
      const point = (this.state.question.map(point => (point.value)));
      const answer = (this.state.question.map(answer => (answer.answer)));      

    return (
            <div>
            <h1>Welcome to Ydrapoej!</h1>
            <label className="score">Score: {this.state.score}</label>
            <button className="decScore" onClick={() => this.decreaseScore()}>Decrease</button>
            <button className="incScore" onClick={() => this.increaseScore()}>Increase</button>
            <button className="reset" onClick={() => this.reset()}>Reset</button>
            <h2>Let's Play!</h2>
            <button className="getQuestion" onClick={() => this.handleFetchQuestion()}>Get Question</button><br />
            <div className="question">{question}</div><br />
            <div><label className="category">Category: {title}</label></div><br />
            <div><label className="point">Point: {point}</label></div><br /><br />
            <button className="togAnswer" onClick={() => this.showHideAnswer()}>Answer</button><br /><br />
            {showHideAnswer && (<div className="answer">{answer}</div> )}
            </div>
    )
}
