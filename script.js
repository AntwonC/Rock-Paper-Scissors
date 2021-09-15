const MIN = 1; 
const MAX = 3; 

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; 

    switch ( computerChoice ) {
        case 1: // Rock
            console.log(`Computer picked Rock (${computerChoice})`); 
            break;
        case 2: // Scissors
            console.log(`Computer picked Scissors (${computerChoice})`); 
            break; 
        case 3: // Paper
            console.log(`Computer picked Paper (${computerChoice})`); 
            break; 
        default: 
            console.log("There is an error"); 
    }

    return computerChoice; 
}


function playRound(playerSelection, computerPlay) {

    let playerChoice = playerSelection.toLowerCase(); 
    let resultText = ""; 
    

    switch ( playerChoice) {
        case "rock": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. Tie!";
                console.log("Computer picked Rock. Tie!"); 
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. You win this round!";
                console.log("Computer picked Scissors. You win this round!"); 
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. You lost this round.";
                console.log("Computer picked Paper. You lost this round."); 
            }
            break; 
        case "scissors": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. You lose this round.";
                console.log("Computer picked Rock. You lose this round."); 
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. Tie!";
                console.log("Computer picked Scissors. Tie!"); 
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. You win this round!";
                console.log("Computer picked Paper. You win this round!"); 
            }
            break; 
        case "paper": 
            if ( computerPlay === 1 ) {
                resultText = "Computer picked Rock. You win this round!";
                console.log("Computer picked Rock. You win this round!"); 
            }  else if ( computerPlay === 2 ) {
                resultText = "Computer picked Scissors. You lose this round.";
                console.log("Computer picked Scissors. You lose this round."); 
            } else if ( computerPlay === 3 ) {
                resultText = "Computer picked Paper. Tie!";
                console.log("Computer picked Paper. Tie!"); 
            }
            break; 
        
        default: 
            resultText = "Something went wrong";
            console.log("Something went wrong"); 
    }

    return resultText; 
}
let userChoice = prompt("Enter Rock, Paper, or Scissors"); 
playRound(userChoice,computerPlay() );
//computerPlay(); 