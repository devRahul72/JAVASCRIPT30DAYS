//used switch case to print the day of the week based on the day number:
//test 4;

let dayNumber = 1;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
}

//test 5;
//using switch case to print the number of graid to be archived bye student:

let score = 85;

switch (true) {
  case score >= 90:
    console.log("Score Grade: A");
    break;
  case score >= 80:
    console.log("Score: Grade: B");
    break;
  case score >= 70:
    console.log("Score: Grade: C");
    break;
  case score >= 60:
    console.log("Score: Grade: D");
    break;
  default:
    console.log("Score:  Grade: F");
}




