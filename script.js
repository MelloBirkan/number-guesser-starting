let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(user, comp, target) {
   const userDistance = Math.abs(target - user);
   const compDistance = Math.abs(target - comp);

   return userDistance <= compDistance ? true : false;
}

function updateScore(winner) {
    winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}