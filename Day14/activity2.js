//TASK 3;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Divide by zero";
  }
  return b !== 0 ? a / b : undefined;
}


export { add, subtract, multiply, divide };

//TEST 4;

function greet(name) {
  console.log(`Hello, ${name}! Kaise ho?`);
}

export default greet;
