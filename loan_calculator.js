// Need to find ...
// Loan Amount
// Annual Percetnage Rate
// Loan Duration 

// From this, you'll need to calculate ...
// Monthly Interest Rate
// Loan Dureation in months


const readline = require('readline-sync');

console.log("Welcome to the loan calcualtor. Use this Calulator for basic types of loans, such as mortages and auto loans.");

console.log('What is your loan amount?');
let loanAmount = readline.question();

console.log('What is your APR (Annual Percentage Rate)?');
let annualPercentageRate = readline.question();  // How to get annualPercentageRate converted to decimal regardless of how user inputs 

console.log('What is your loan duration in years?');
let loanDuration = readline.question();

let loanDurationMonths = (loanDuration *12)

let monthlyInterestRate = annualPercentageRate / loanDurationMonths

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

console.log(monthlyPayment)






