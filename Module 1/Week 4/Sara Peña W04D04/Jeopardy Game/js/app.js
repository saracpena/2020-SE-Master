import {Team} from "../jeopardy-scorecard/scorecard.js";

$(()=>{
    const team1 = new Team('Team 1', $('#team1'));
    const team2 = new Team('Team 2', $('#team2'));
    const team3 = new Team('Team 3', $('#team3'));

    const teams = [team1,team2,team3];

    $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active');
      // extract value of tile clicked
      const currPointVal = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));
      for (const team of teams) {
      	// remove previous click handlers
      	team.$el.find(".score-button-wrapper").children().off();
      	// attach handlers with appropriate point value
      	team.$el.find(".increment").on('click', () => {
            //the pt value should be imported from another class
            team.increaseScore(currPointVal);

        });
        team.$el.find(".decrement").on('click', () => {
            team.decreaseScore(currPointVal);
            
        });
      }
    })
})
