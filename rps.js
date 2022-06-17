// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

let userScore = 0;
let compScore = 0;
const winningScore = 3;

function userRoundWin() {
  userScore += 1;
  return('User wins this round!');
}
  
function compRoundWin() {
  compScore += 1;
  return('Computer wins this round!');
}
  
function addScore(choice, computerChoice) {
  console.log(`You chose ${choice}. | Computer chose ${computerChoice}.`)
  if ((choice === 'rock' && computerChoice === 'scissors') ||
     (choice === 'rock' && computerChoice === 'lizard') ||
     (choice === 'paper' && computerChoice === 'rock') ||
     (choice === 'paper' && computerChoice === 'spock') ||
     (choice === 'scissors' && computerChoice === 'paper') ||
     (choice === 'scissors' && computerChoice === 'lizard') ||
     (choice === 'lizard' && computerChoice === 'paper') ||
     (choice === 'lizard' && computerChoice === 'spock') ||
     (choice === 'spock' && computerChoice === 'rock') ||
     (choice === 'spock' && computerChoice === 'scissors')){
       
     return userRoundWin();
     } else if (choice === computerChoice) {
       return("It's a tie!");
     } else {
       return compRoundWin();
     }
}
    
function displayWinner() {
  if (userScore === winningScore) {
    console.log(`User wins! Score: ${userScore}:${compScore}`);
  } else if (compScore === winningScore) {
    console.log(`Computer wins! Score: ${compScore}:${userScore}`);
  }
}

let counter = 0;
while (true) {
  counter += 1;
  const readline = require('readline-sync');
  const VALID_CHOICES = ['rock', 'paper', 'scissors'];

  console.log('Welcome!')

  console.log(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    console.log("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let winOrLose = addScore(choice, computerChoice)
  
  console.log(`${winOrLose}`)
  
  console.log(`Round: ${counter} \nUser Score: ${userScore} | Comp Score: ${compScore}`);

  displayWinner();

  if (userScore === winningScore || compScore === winningScore) {
   console.log('Do you want to play again (y/n)?');

   let answer = readline.question().toLowerCase();
   while (answer[0] !== 'n' && answer[0] !== 'y') {
    console.log('Please enter "yes" or "no".');
      answer = readline.question().toLowerCase();
   }
   if (answer !== 'y') break;
  }
}

// Need to double review exactly what's happening here
  