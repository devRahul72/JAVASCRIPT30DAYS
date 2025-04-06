//Test 4;
//create a function that waits for a promise to resolve and console log the result
function waitForIt() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("🎉 Promise resolved after 2 seconds!");
      }, 2000);
    });
  }
  
  async function handlePromise() {
    console.log("⌛ Waiting for the promise...");
    const result = await waitForIt();
    console.log(result);
  }
  
  handlePromise();
 //Test 5;
 //create a function that waits for a promise to reject and console log the error try catch block
function bringChocolate() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject("❌ Sorry! Chocolate gir gayi road pe 😢");
      }, 6000);
    });
  }
  
  async function babyWaits() {
    try {
      console.log("🧒 Main wait kar raha hoon chocolate ke liye...");
      const result = await bringChocolate(); // yeh reject karega
      console.log("🍫 Chocolate mili:", result);
    } catch (error) {
      console.log("😭 Arre yeh kya hua! Error mila:", error);
    }
  }
  
  babyWaits();
  