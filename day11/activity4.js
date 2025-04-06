// test 6;
//create a function that waits for a promise to reject and console log the error try catch block
function bringChocolate() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject("❌ Sorry! Chocolate gir gayi road pe 😢");
      }, 2000);
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
  //test 8;
//create a function that fetches data from a server and console log the result using async await;
async function fetchData() {
    try {
      console.log("🔍 Data fetch karne jaa raha hoon...");
  
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
      const data = await response.json();
  
      console.log("✅ Data mila:", data);
    } catch (error) {
      console.log("❌ Error aaya:", error.message);
    }
  }
  
  fetchData();
  //test 7;