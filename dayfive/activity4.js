//create a function to return a parameter and pruduct and second parameter return default value;
//test 7
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5,5)); // Output: 15
console.log(multiply(7));    // Output: 7 (kyunki b ki default value 1 hai)

//create a function to return a parameter and pruduct and second parameter return default value;
//test 8
function multiply2(name, age= 19) {
    return `${name} is ${age} years old`;
}
console.log(multiply2("bhai",27)); // Output: bhai is 19 years old
console.log(multiply2("bhabhi"));   // Output: bhai is 19 years