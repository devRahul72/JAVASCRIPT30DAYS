//Test 8;
// help of enhance object litrals to create object to print greet function and address object;
const name = "John";
const age = 30;

const person = {
  name, 
  age,  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  address: {
    city: "New York",
    country: "USA",
  },
  ["favorite color"]: "blue", 
};

console.log(person);
person.greet();
console.log(typeof person.greet);
//test 9;
// help of computed property based on create a name and print;
const propertyName1 = "firstName";
const propertyName2 = "lastName";

const object= {
  [propertyName1]: "John",
  [propertyName2]: "Doe",
};

console.log(object);