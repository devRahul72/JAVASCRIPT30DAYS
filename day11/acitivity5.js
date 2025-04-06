//test 9;
//create a function that waits for all promises to resolve and console log the results using Promise.all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍫 Chocolate mil gaya!");
    }, 5000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("📦 Amazon ka parcel aa gaya!"), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("📱 Phone charge ho gaya!"), 1500);
  });
  
  
  async function getAllData() {
    try {
      console.log("⌛ Sab ka wait kar rahe hain...");
  
      
      const results = await Promise.all([promise1, promise2, promise3]);
  
      
      console.log("✅ Sab complete ho gaya:");
      console.log(results); 
    } catch (error) {
      console.log("❌ Koi ek promise fail ho gaya:", error);
    }
  }
  
  // Step 4: Call the function
  getAllData();
  
  //test 10;
  //create a function that waits for any promise to resolve and console log the result using Promise.race;
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("🏃‍♂️ P1: Chocolate mil gayi! (1s)"), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("🚴‍♀️ P2: Amazon parcel aa gaya! (2s)"), 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("🚗 P3: Pizza deliver ho gaya! (3s)"), 3000);
  });
  
  // Promise.race ka use
  async function whoIsFastest() {
    try {
      console.log("⏳ Kis promise ka kaam sabse pehle hoga, dekhte hain...");
      const fastest = await Promise.race([p1, p2, p3]);
      console.log("🏁 Sabse pehle complete hone wala:", fastest);
    } catch (error) {
      console.log("❌ Koi error aaya:", error);
    }
  }
  
  // Call the function
  whoIsFastest();
  