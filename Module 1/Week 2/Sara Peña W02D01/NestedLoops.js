for (let i=1; i<=10; i++){
    console.log('Outer Loop', i);//every time "i" loop completes it 
    for(let j = 10; j >= 0; j-=2){//goes to second loop and completes before next "i" iteration
        console.log('   Inner Loop', j);
    }
}

console.log('   gameBoard example i.e. rows and array values======')

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 38, 4, 2]
]; 

let totalScore = 0;
for (let i=0; i < gameBoard.length; i++){//calculating rows
    let row = gameBoard[i];
    for (let j = 0; j <row.length; j++){//calculating values of row arrays i.e. 4, 32, 8, 4 etc
        totalScore += row [j];
    }
}