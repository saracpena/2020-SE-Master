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
            .then(response => response.json()) 
            .then(json => this.setState({
            question: json
        }),    
            err => console.log(err))
    }

    showAnswer() {
        this.setState({showAnswer: !this.state.showAnswer});
    }

    addScore() {
     const score = (this.state.question[0].value);
     console.log(score);
     console.log(this.state.score);
     let updateScore = (score) + (this.state.score);
     this.setState({
       score: updateScore});
    }

    subScore() {
        const score = (this.state.question[0].value);
        let updateScore = (this.state.score) - (score);
        this.setState({
            score: updateScore});  
    }   
    
    reset() {
        this.setState({score: 0});
    }
     
render () {
    //another way to write this: const {showHideAnswer} = this.state :is
        const  showAnswer = this.state.showAnswer;
        // const {showAnswer} = this.state.showAnswer;
        const question = (this.state.question.map(question => (question.question)));
        const category = (this.state.category.title);
        // const title = (this.state.question.map(title => (title.category.title)));
        const point = (this.state.question.map(point => (point.value)));
        const answer = (this.state.question.map(answer => (answer.answer))); 
    return (
            <div>
            <h1>Welcome to Ydrapoej!</h1>
            <h2 className="score">Score: <span>{this.state.score}</span></h2>
            <button className="decScore" onClick={() => this.subScore()}>Decrease</button>
            <button className="incScore" onClick={() => this.addScore()}>Increase</button>
            <button className="reset" onClick={() => this.reset()}>Reset</button>
            <h2>Let's Play!</h2>
            <div><h2 className="category">Category: <span>{category}</span></h2></div><br />
            <button className="getQuestion" onClick={() => this.GetQuestion()}>Get Question</button><br />
            <div className="question"><span>{question}</span></div><br />
            <div><h2 className="point">Points: <span>{point}</span></h2></div><br /><br />
            <button className="togAnswer" onClick={() => this.showAnswer()}>Answer</button><br /><br />
            {showAnswer && (<div className="answer">{answer}</div> )}
            </div>
    )
}
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)

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