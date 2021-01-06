//!TEAM SCORE CARD
$(()=>{
  // const pointValue = 100;
  const team1 = new Team('team1', $('#team1')).setup();
  const team2 = new Team('team2', $('#team2')).setup();
  const team3 = new Team('team3', $('#team3')).setup();
  console.log(team1.$el); //confirm the element is working

//!Getting current target and toggles class to active
    const $tiles = $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active') 
    //TODO: Step 1: Get Value of tile that was clicked on
     // console.log($(event.currentTarget).text().split(/\s+/)[1].slice(1));
     const currTileVal = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));

    //TODO: Step 2: Change click handlers
      team1.increaseBy = currTileVal;
      team2.increaseBy = currTileVal;
      team3.increaseBy = currTileVal;
    })
  })
//!Extract value from tiles and change quick handlers on team scorecard to de/increase


class Team {
  constructor(name, $el){
      this.name = name;
      this.score = 0;
      //lets assign the element to each Team instance
      this.$el = $el;
      //! Add new property 
      this.increaseBy = 100;
  }
  //what does the score board do?
  //it increases the score based on pointvalue
  increaseScore(pointValue){
   // this.score = this.score + pointValue;
   this.score += pointValue;
   //this will now allow us to grab the 1st element and input the score as the text
   //what is eq? it stands for equals and selects children in arry
   // the first child is the h1
   this.$el.children().eq(0).text(this.score);
  }
  decreaseScore(pointValue){
      this.score -= pointValue;
      this.$el.children().eq(0).text(this.score);
  }
  setup(){
      //select your 2nd child because thats your btn
      this.$el.children().eq(1).on('click', () => {
          //the pt value should be imported from another class
          this.increaseScore(this.increaseBy); //100
      })
      this.$el.children().eq(2).on('click', () => {
          this.decreaseScore(this.increaseBy); //100
      })
      //remember to call these methods when you instantiate the class
      return this;
  }
}