//test 7;
// "Create a getter method in the Person class that returns the fullName (assume there are firstName and lastName properties). Create an instance and display the full name in the console using the getter."

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // Getter method for fullName
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Ek instance banana
// const person1 = new Person("Rahul", "Kumar");

// // Getter ke through full name console me dikhana
// console.log(person1.fullName); // Output: Rahul Kumar
//test 8;
//"Create a getter method in the Person class that returns the fullName (assume there are firstName and lastName properties). Create an instance and display the full name in the console using the getter."

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

// Instance create karna
const person1 = new Person("Rahul", "Kumar");

// Setter ka use karke naam update karna
person1.fullName = "Amit Verma";

// Updated full name log karna
console.log(person1.fullName);  // Output: Amit Verma
