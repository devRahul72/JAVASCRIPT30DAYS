//test 4;
// create a class that extends the built-in Error function  and console log the error in which hanle the error help of try catch block;
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "🌟CustomError"; 
    }
  }
  function checkValue(value) {
    if (value < 0) {
      throw new CustomError("❌ Negative value allowed nahi hai!");
    }
    console.log("✅ Value sahi hai:", value);
  }
  
  try {
    console.log("🔍 Value check kar rahe hain...");
    checkValue(-5); 
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("⚠️ Custom Error Pakda Gaya:");
      console.log(error.name + ": " + error.message);
    } else {
      console.log("❗ Unknown Error:", error);
    }
}

//test 5
//create a class that extends the built-in validation error and console log the error in which hanle the error help of try catch block;
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "🛑ValidationError"; 
    }
  }
  
  
  function validateInput(input) {
    if (input.trim() === "") {
      
      throw new ValidationError("Input khaali hai! Kuch likho bhai 🙏");
    }
    console.log("✅ Input sahi hai:", input);
  }
  
  
  try {
    console.log("🔍 Input validate kar rahe hain...");
    validateInput("   "); 
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("⚠️ Validation Error Pakda Gaya:");
      console.log(error.name + ": " + error.message);
    } else {
      console.log("❗ Unknown Error:", error);
    }
  }
  