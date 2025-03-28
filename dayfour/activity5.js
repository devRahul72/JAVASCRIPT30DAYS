// not consider 5 from 1 to 10 using continue;
//test 8;
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  
  //  break the loop reach i == 7;
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }