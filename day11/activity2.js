//Test 3
//create a promise chain that connects to a server, fetches data, and processes the data.console log the messages after each step of the chain getting this timeline

function connectToServer() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("🔄 Connecting to server...");
        resolve("✅ Server connected.");
      }, 1000);
    });
  }
  
  function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("📦 Fetching data from server...");
        resolve("✅ Data received.");
      }, 1500);
    });
  }
  
  function processData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("📊 Processing data...");
        resolve("✅ Data processed successfully!");
      }, 1000);
    });
  }
  
  // 🔗 Chaining the promises
  connectToServer()
    .then(function(message1) {
      console.log(message1);
      return fetchData();
    })
    .then(function(message2) {
      console.log(message2);
      return processData();
    })
    .then(function(message3) {
      console.log(message3);
    })
    .catch(function(error) {
      console.error("❌ Error:", error);
    });
  