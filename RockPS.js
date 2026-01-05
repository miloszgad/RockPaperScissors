console.log("hello world")

function getComputerChoice() {
   const n = Math.floor(Math.random() * 3);
if (n === 0) return "rock";
if (n === 1) return "paper";
if (n === 2) return "scissors";
}


function getHumanChoice() { 
    return prompt("Rock, Paper or Scissors?");

}

let computerScore = 0
let humanScore = 0


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if ( 
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
        ) 
           { humanScore++;
             alert("You won!");
  }  else if ( 
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "rock" && computerChoice === "paper"
        ) 
        {computerScore++;
             alert("You lost.");
   } else if (
        humanChoice === computerChoice     
        )
            { alert("A draw.")
                return; 
    } else {
        alert("Incorrect word")
    }
         
    }

    


    
     
    function playGame() {
       for (let i = 0; i < 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
         playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("Congratulations!!! You have won a game") ;
    } else if (humanScore < computerScore) {
        alert("Unfortunately you have lost.");
    } else if (humanScore === computerScore) {
        alert("A draw. It was a really good game!");
    } 
}

playGame()     



    


