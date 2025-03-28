// star printing program use nested for loop;
//test
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
      // console low print in new lines so add in string
    }
    console.log(row);
  }
  
  
  //test 8;
  // used nested for loop to print alphabets;
  let a = 0; // Changed initial value to 0
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + String.fromCharCode(65 + a) + " ";
      a++;
    }
    console.log(row);
  }