// test 7;
//create function with default parameter and print the result;
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 4));  // Output: 20
console.log(multiply(7));     // Output: 7 (b की default value 1 है)
console.log(multiply(10, 0)); // Output: 0
console.log(multiply(-3, 3)); // Output: -9
