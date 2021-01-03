//!You are the captain of the USS Assembly, on a mission to destroy every last alien ship.
//!Battle the aliens as you try to destroy them with your lasers.

//!There are six alien ships
//!Aliens' weakness is that they are too logical and attack one at a time
//!they will wait to see the outcome of a battle before deploying another alien ship.

//!Your strength is that you have the initiative and get to attack first. 
//!However, you do not have targeting lasers and can only attack the aliens in order. 
//!After you have destroyed a ship, you have the option to make a hasty retreat.

//* A game round would look like this:
//! LOOP
//TODO: Attack the first alien ship, 
//TODO: If the ship survives, it attacks you
//TODO: If you survive, you attack the ship again

//! DESTROYED
//TODO: If you destroy the ship, you have the option to attack the next ship or to retreat
//TODO: If you retreat, the game is over, perhaps leaving the game open for further developments or options.
//TODO: You win the game if you destroy all of the aliens.
//?You lose the game if you are destroyed.

//* SHIP PROPERTIES
//TODO: 'hull' is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
//?LOOP? i.e.
    // let hull;
    // for(hull = 0; hull<=0; hull++){

    // }

//! SPACE SHIP BUILD//
//TODO: 'hull' - 20 //the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
//TODO: 'firepower' - 5 //the amount of damage done to the 'hull' of the target with a successful hit.
//TODO: 'accuracy' - .7 //the chance between 0 and 1 that the ship will hit its target.
// CREATE CAPTAIN OBJECT
//!Math.random() - returns a floating-point, pseudo-random number in the range 0 to less than 1, which you can then scale to your desired range
//console.log('window is loaded');

//* BEGIN CODING HERE *//

console.log('%c Welcome to Space Battle, Captain!','font-size: 20px; font-style: italic; background: azure; border: 2px solid grey; color: green;')

setTimeout(function() {
    alert(
      "Welcome to Sara's Space Battle page! - open the console log on the page to play. Hurry the fate of the planet is in your hands Captain!"
    );
  }, 1000);

//!OPPONENT CLASS OOP BLUEPRINT: For Captain and Alien SpaceShips

class Player {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

//!Captain & Alien - CLASS OOP BLUEPRINT EXTENDS/INHERITENCE with keyword 'new'

let Captain = new Player('captain', 20, 5, .7)
console.log(Captain);

//!Loop through alien spaceships, create array.

const alienArr = []
for(let i = 1; i <= 6; i++){
    //TODO: Setup Alien Properties
    //!Alien Hull @ random
    let alienHull = Math.floor(Math.random() * 6) + 3;
    //!Alien Firepower @ random
    let alienFirePower = Math.floor(Math.random() * 4) + 2;
    //!Alien Accuracy @ random
    let alienAccuracy = Math.floor(Math.random() * .8) + .6;
    //TODO: 'new' Alien i.e. Inheritance/Extends from Opponent object above
    let Alien = new Player(alienHull, alienFirePower, alienAccuracy)
    //!Battle each alien one at a time from alienArr
    alienArr.push(Alien);
};
console.log(alienArr);

//!Loop through length of Battle (Six Aliens) i.e. alienArr.length
//TODO: WHILE LOOP

while (alienArr.length > 0) {
    let aliensLeft = alienArr.pop();//!removes the last element from alienArr and returns that element
    if (Math.random() < aliensLeft.accuracy) {
      console.log("%c You've been hit!", "font-weight: bold; font-size: 15px; font-variant: small-caps; color: red");
      Captain.hull = Captain.hull - aliensLeft.firepower;
      console.log(Captain.hull);
    } else if (Math.random() > aliensLeft.accuracy) {
      console.log(`%c Nice shot! ${Captain.firepower}  damage!, "font-style: italic; font-variant: small-caps; text-transform: capitalize; font-size: 15px; background: azure; border: 1px solid yellow`);
      console.log(aliensLeft.hull - Captain.firepower);
    } console.log("%c Great Job Captain, Alien ship destroyed!", "font-weight: bold; font-variant: small-caps; font-size: 15px; font-variant: small-caps; color: blue");
    //!Checks the player's health to determine game vitality
    if (Captain.hull <= 0) {
      console.log("%c We did our best captain!", "font-weight: bold; font-variant: small-caps; font-size: 15px; background: azure; border: 1px solid red; color: orange");
      break;
    }; //!Asks if the player wants to continue battling
    if (!confirm("Continue: Yes/No?")) {
      console.log("%c Don't go! The weight of the world is on your shoulders!", "font-weight: bold; font-size: 15px; font-variant: small-caps; color: red");
      break;
    }
  };
    
//!End game if Captain wins!
if (Captain.hull > 0 && alienArr.length == 0) {
    console.log("%c You've saved us from those pesky Aliens . Thank you, Captain!", "background: azure; border: 1px solid grey; text-transform: capitalize; font-weight: bold; font-style: italic; font-variant: small-caps; color: indigo; font-size: 15px");
  }


/**
 * MyMethod
 * * Important
 * ! Dep method
 * ?Should?
 * TODO:
*/

//======= WORKING THRU IT ======================================================================
//const captain instead of let/var
// const captain = {//TODO: 'captain' is the [OBJECT] followed by its properties,
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
//     isAlive: true,//!current state
//     attack(target){//!the aliens
//         let ranNum = Math.random();//!Random number but 'window.crypto.getRandomValues()' is crypted for security
//         console.log(`%c Accuracy threshold is ${ranNum}`, `font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;`);//template literal accessing variable
//         if (ranNum < captain.accuracy) {//!'this' is directed @ captain's[object] accuracy
//             console.log(`Nice shot, Captain!`);
//             target.hull = target.hull - captain.firepower;
//             console.log(`Alien has ${target.hull} hull points left.`);
//             if (target.hull <= 0) {
//                 target.isAlive = false;
//                 console.log(`You've saved us from those pesky Aliens, once again! Thank you, Captain!`);
//             }
//         } else {
//             console.log(`You Missed!`);
//         }
//     }
// }
//! ALIEN SHIP BUILD
//TODO: 'hull' -  between 3 and 6 
//TODO: 'firepower' - between 2 and 4
//TODO: 'accuracy' -  between .6 and .8
// const alien = {
//     hull: Math.floor(Math.random() * 6) + 3,//any random # between 3 & 6
//     firepower: Math.floor(Math.random() * 4) + 2,//any random # between 2 & 4
//     accuracy: Math.floor(Math.random() * .8) + .6,//update to make it to the hundredth?
//     isAlive: true,//current state, i.e. starting point
//     attack(target) {//attack function rolls out as follows
//         let ranNum = Math.random();
//         console.log(`Accuracy threshold is ${ranNum}`);
//         if (ranNum < alien.accuracy) {
//             console.log(`You've been hit!`);
//             target.hull = target.hull - alien.firepower;
//             console.log(`hero has ${target.hull} hull points left.`);
//             if (target.hull <= 0) {
//                 target.isAlive = false;
//                 console.log(`GAME OVER!`);
//             }
//         } else {
//             console.log(`Phew! That was close!`);
//         }
//     }
// }

//!ALIENS
//Define an array six Aliens
// const alienArr = [];
//Counting Aliens
// var alienCount = 0;

//! BATTLE BUILD - Let the games begin //
// const battle = (player, computer) => {//*These two params must be captain and alien
//     while (player.isAlive && computer.isAlive){//*while loop determines 'when captain or computer attacks'
//         player.attack(computer);
//         if (computer.isAlive) { 
//             computer.attack(player);
//         }
//     }
// }

// class alien extends captain{
//     constructor(name){
//         hull = Math.floor(Math.random() * 6) + 3,
//         firepower = Math.floor(Math.random() * 4) + 2,
//         accuracy = Math.floor(Math.random() * .8) + .6,
//     }
// }