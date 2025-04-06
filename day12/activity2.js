//Test 3;
//Create a script which has try-catch and finally block.Console log in every block so that order of execution is understood;

function checkExecutionFlow() {
    try {
      console.log("🔹 TRY block: Kaam start ho gaya...");
      
      throw new Error("❌ TRY block me error aaya!");
  
      console.log("🟢 TRY block: Ye line kabhi nahi chalegi...");
    } catch (error) {
      console.log("🔸 CATCH block: Error pakda gaya...");
      console.log("📢 Error Message:", error.message);
    } finally {
      console.log("🔘 FINALLY block: Yeh hamesha chalega — error aaye ya na aaye.");
    }
  
    console.log("✅ Kaam complete ho gaya.");
  }
  checkExecutionFlow();
  