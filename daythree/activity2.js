//test case 3;
//write the program to find the largest number among three numbers using Nested if else statement
let num1 = 10;
let num2 = 30;
let num3 = 20;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Sabse bada number: ", num1);
  } else {
    console.log("Sabse bada number: ", num3);
  }
}
 else {
  if (num2 > num3) {
    console.log("Sabse bada number: ", num2);
  } else {
    console.log("Sabse bada number: ", num3);
  }
}
