//used do while loop to print the numbers from 1 to 5;
//task 5;
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

//used do while loop to and find fectorial of a number;
//task 6;
let number = 5; 
let factorial = 1;
let j = 1;

do {
  factorial *= j;
  j++;
} while (j <= number);

console.log("Factorial of ",+ number, "is:",+factorial);

