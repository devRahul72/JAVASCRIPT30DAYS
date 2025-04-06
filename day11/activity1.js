//Test 1
//creae a promise  console log the message after 2 seconds;

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("✅ Promise resolved after 2 seconds!");
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  
  myPromise.then(function(message) {
    console.log(message);
  });
  // test 2
  //create a promise that rejects after  second and used catch to consollog the message

const myPromise2 = new Promise(function(resolve, reject) {
    
    setTimeout(function() {
      reject("❌ Promise rejected after 1 second!");
    }, 1000); // 1000 milliseconds = 1 second
  });
  
  myPromise2.then(function(message) {
    console.log(message);
  });
  
  myPromise2.catch(function(message) {
    console.log(message);
  });
  
  