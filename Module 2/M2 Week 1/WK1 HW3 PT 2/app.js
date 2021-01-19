class App extends React.Component {
    state = {
        baseURL: 'http://jservice.io/api/random',
        question:[],
        category: {
            title: ''},
        showAnswer: false,
      
        score: 0
    }
    GetQuestion() {
          fetch(this.state.baseURL)
            .then(response => {response.json()
             }) //! returns in JSON
            .then(json => this.setState({
            question: json,
              //!clearing the field for new entry below,
            score: 0
        }),
        //! Outputs an error message to the Web Console.
            err => console.log(err))
    }

    toggleAnswer() {
        this.setState({showAnswer: !this.state.showAnswer});
    }

// Points = (event) => {
//     const currScore = this.state.score;
//     const currValue = this.state.value;
//     if(event.target.id === 'incScore'){
//         currScore = currScore + currValue;
//     }
//     if(event.target.id === "decScore"){
//         currScore = currScore - currValue;
//     }
//     this.setState(
//         {score: currScore}
//     )
// }

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
      const {showAnswer} = this.state.showAnswer;
      const question = (this.state.question.map(question => (question.question)));
      const title = (this.state.question.map(title => (title.category.title)));
      const point = (this.state.question.map(point => (point.value)));
      const answer = (this.state.question.map(answer => (answer.answer)));      

    return (
            <div>
            <h1>Welcome to Ydrapoej!</h1>
            <label className="score">Score: {this.state.score}</label>
            <button className="decScore" onClick={() => this.subScore()}>Decrease</button>
            <button className="incScore" onClick={() => this.addScore()}>Increase</button>
            <button className="reset" onClick={() => this.reset()}>Reset</button>
            <h2>Let's Play!</h2>
            <button className="getQuestion" onClick={() => this.GetQuestion()}>Get Question</button><br />
            <div className="question">{question}</div><br />
            <div><label className="category">Category: {category}</label></div><br />
            <div><label className="point">Point: {point}</label></div><br /><br />
            <button className="togAnswer" onClick={() => this.showAnswer()}>Answer</button><br /><br />
            {showHideAnswer && (<div className="answer">{answer}</div> )}
            </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)