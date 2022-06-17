// Need to find ...
// Loan Amount
// Annual Percetnage Rate
// Loan Duration 

// From this, you'll need to calculate ...
// Monthly Interest Rate
// Loan Dureation in months


function isAPRValueInvalid(aprPercentage){
  // Check if valid number was submitted 
  if (aprPercentage.trimStart() === ''  || Number.isNaN(Number(aprPercentage))) {
    return 'The number you submitted is invalid.  Please try again.';
  } 
  const percentageValue = (aprPercentage / 100)
  
  if (percentageValue < 0.009) {
    return 'The APR percentage must be between 1 and 100';
  }
  // If APR passess above checks, return number is valid
  return null;
}

function invalidNumber(num) {
  return num.trimStart() === ''  || Number.isNaN(Number(num));
}

const readline = require('readline-sync');

console.log("Welcome to the loan calcualtor. Use this Calulator for basic types of loans, such as mortages and auto loans.");

console.log('What is your loan amount?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
   console.log("Hmmmm... That doesn't look like a valid number")
   loanAmount = readline.question();
  }

console.log('What is your APR (Annual Percentage Rate)?');
let annualPercentageRate = readline.question();  // How to get annualPercentageRate converted to decimal regardless of how user inputs 

let aprErrorMessage = isAPRValueInvalid(annualPercentageRate);

while (aprErrorMessage !== null) {
   console.log(aprErrorMessage);
   annualPercentageRate = readline.question();
   aprErrorMessage = isAPRValueInvalid(annualPercentageRate);
}

console.log('What is your loan duration in years?');
let loanDuration = readline.question();

while (invalidNumber(loanDuration)) {
   console.log("Hmmmm... That doesn't look like a valid number")
   loanDuration = readline.question();
  }
  
let annualInterestRate = Number(annualPercentageRate) / 100;
let monthlyInterestRate = annualInterestRate / 12;
let loanDurationMonths = (loanDuration *12)

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`)






