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

//
setTimeout(function() {
    alert(
      "Welcome to Sara's Space Battle page! - open the console log on the page to play. Hurry the fate of the planet is in your hands Captain!"
    );
  }, 5000);

//const captain instead of let/var
const captain = {//TODO: 'captain' is the [OBJECT] followed by its properties,
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,//!current state
    attack(target){
        let ranNum = Math.random();//!Random number but 'window.crypto.getRandomValues()' is crypted for security
        console.log(`%c Accuracy threshold is ${ranNum}`, `font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;`);//template literal accessing variable
        if (ranNum < this.accuracy) {//!'this' is directed @ captain's[object] accuracy
            console.log(`Nice shot, Captan!`);
            target.hull = target.hull - this.firepower;
            console.log(`Alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`You've saved us from those pesky Aliens, once again! Thank you, Captain!`);
            }
        } else {
            console.log(`You Missed!`);
        }
    }
}

//?CAPTAIN CLASS OOP LAYOUT:
//TODO: COMPLETE THIS SECTION

// class captain {
//     constructor(name, hull, firepower, accuracy){
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//     }

// }

//?ALIEN CLASS OOP LAYOUT EXTENDS/INHERITENCE:
//TODO: COMPLETE THIS SECTION

// class alien extends captain{
//     constructor(name){
//         hull = Math.floor(Math.random() * 6) + 3,
//         firepower = Math.floor(Math.random() * 4) + 2,
//         accuracy = Math.floor(Math.random() * .8) + .6,
//     }
// }

//! ALIEN SHIP BUILD
//TODO: 'hull' -  between 3 and 6 
//TODO: 'firepower' - between 2 and 4
//TODO: 'accuracy' -  between .6 and .8
const alien = {
    hull: Math.floor(Math.random() * 6) + 3,//any random # between 3 & 6
    firepower: Math.floor(Math.random() * 4) + 2,//any random # between 2 & 4
    accuracy: Math.floor(Math.random() * .8) + .6,//update to make it to the hundredth?
    isAlive: true,//current state, i.e. starting point
    attack(target) {//attack function rolls out as follows
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`hero has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`GAME OVER!`);
            }
        } else {
            console.log(`Phew! That was close!`);
        }
    }
}

//! BATTLE BUILD - Let the games begin //
const battle = (player, computer) => {//*These two params must be captain and alien
    while (player.isAlive && computer.isAlive){//*while loop determines 'when captain or computer attacks'
        player.attack(computer);
        if (computer.isAlive) { 
            computer.attack(player);
        }
    }
}


//!PLAYER
    //!ATTACK
//!VILLAIN
    //!ATTACK


/**
 * MyMethod
 * * Important
 * ! Dep method
 * ?Should?
 * TODO:
*/

