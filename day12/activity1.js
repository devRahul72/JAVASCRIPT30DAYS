//test 1;
//create a function that throws an error and console log the error message
function throwErrorExample() {
    throw new Error("🚫 Galti ho gayi bhai! Function me kuch toh gadbad hai.");
  }
  
  try {
    console.log("🔍 Function call kar rahe hain...");
    throwErrorExample();
    console.log("😅 Yeh line kabhi chalegi hi nahi...");
  } catch (error) {
    console.log("❌ Error pakda gaya:");
    console.log(error.message);
  }
  //test 2;
// create a function that divides two numbers and console log the result;
function divideNumbers(a, b) {
    if (b === 0) {
      throw new Error("🚫 Denominator 0 hai! Divide by zero allowed nahi hota.");
    }
    return a / b;
  }
  
  try {
    console.log("🔢 Divide kar rahe hain...");
    const result = divideNumbers(10, 0); 
    console.log("✅ Result:", result);
  } catch (error) {
    console.log("❌ Error pakda gaya:");
    console.log(error.message);
  }
  
  