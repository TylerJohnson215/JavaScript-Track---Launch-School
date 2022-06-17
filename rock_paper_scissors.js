// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return('You win!');
  } else if (choice === computerChoice) {
    return("It's a tie!");
  } else {
    return('computer wins!');
  }
}

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

while (true) {
console.log(`Choose one: ${VALID_CHOICES.join(', ')}.`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  console.log("That's not a valid choice");
  choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

console.log(`You chose ${choice}, computer chose ${computerChoice}`);

let winOrLose = displayWinner(choice, computerChoice)

console.log(`${winOrLose}`)

console.log('Do you want to play again? (y/n)');
let answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  console.log('Please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;
}