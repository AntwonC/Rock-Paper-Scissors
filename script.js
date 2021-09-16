const MIN = 1; 
const MAX = 3; 

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; 

   /* switch ( computerChoice ) {
        case 1: // Rock
           // console.log(`Computer picked Rock (${computerChoice})`); 
            return computerChoice; 
        case 2: // Scissors
            //console.log(`Computer picked Scissors (${computerChoice})`); 
            return computerChoice;
        case 3: // Paper
            //console.log(`Computer picked Paper (${computerChoice})`); 
            return computerChoice; 
        default: 
            //console.log("There is an error"); 
            computerChoice = "There is an error"; 
    } */

    return computerChoice; // 1 = Rock, 2 = Scissors, 3 = Paper, 4 = Error 
}


function playRound(playerSelection, computerPlay) {

    let playerChoice = playerSelection.toLowerCase(); 
    let resultText = ""; 
    let resultValue = -1; 
   //  console.log(computerPlay); 

    switch ( playerChoice ) {
        case "rock": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. Tie!";
                //console.log("Computer picked Rock. Tie!"); 
                resultValue = 4; // Tie
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. You win this round!";
                //console.log("Computer picked Scissors. You win this round!"); 
                resultValue = 5; // You win
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. You lost this round.";
                resultValue = 6; // You lose
                //console.log("Computer picked Paper. You lost this round."); 
            }
            break; 
        case "scissors": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. You lose this round.";
                //console.log("Computer picked Rock. You lose this round.");
                resultValue = 6;  
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. Tie!";
                resultValue = 4; 
                //console.log("Computer picked Scissors. Tie!"); 
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. You win this round!";
                resultValue = 5;
                //console.log("Computer picked Paper. You win this round!"); 
            }
            break; 
        case "paper": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. You win this round!";
                resultValue = 5; 
                //console.log("Computer picked Rock. You win this round!"); 
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. You lose this round.";
                resultValue = 6;
               // console.log("Computer picked Scissors. You lose this round."); 
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. Tie!";
                resultValue = 4; 
               // console.log("Computer picked Paper. Tie!"); 
            }
            break; 
        
        default: 
            resultText = "Something went wrong";
           // console.log("Something went wrong"); 
    }

    return resultValue; 
}

function game() {
    
    let gameCounter = 0; 
    let playerScore = 0; 
    let computerScore = 0; 
    let winnerText = ""; 

    while ( playerScore != 5 && computerScore != 5 ) {
        let userChoice = prompt("Enter Rock, Paper, or Scissors"); 
        let roundResult = playRound(userChoice, computerPlay()); 
        gameCounter++; 

        console.log(`Round ${gameCounter}`);

        if ( roundResult === 4 ) {
            console.log("Tie! Next round"); 
        } else if ( roundResult === 5 ) {
            playerScore++; 
            console.log("You won this round!"); 
        } else if ( roundResult === 6 ) {
            computerScore++; 
            console.log("Computer won this round.");
        }

        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`);

    }

    if ( playerScore == 5 ) {
        winnerText = "You won the game!"; 
    } else {
        winnerText = "The computer bested you.";
    }

    return winnerText; 
    
}


let winner = game(); 
console.log(winner); 
//console.log(playRound(userChoice,computerPlay()));
//computerPlay(); 