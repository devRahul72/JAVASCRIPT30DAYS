//test 1;
//Define a Person class with name and age properties, and a method that returns a greeting message.
//Ten, create an instance of the class and log its greeting message to the console.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }
//   const person1 = new Person("Amit", 22);
  
//   console.log(person1.greet());
  
//test 2;
//Add a method to the Person class that updates the age property and logs the updated age to the console.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age is: ${this.age}`);
    }
  }
  
  
  const person2= new Person("Amit", 22);
  
  console.log(person2.greet());
  
  
  person2.updateAge(25);  // Output: Updated age is: 25
  