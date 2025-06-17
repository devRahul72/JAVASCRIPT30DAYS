 // test 1;
//  Define a Person class that has name and age properties, and a method that returns a greeting message.
// Create an instance of this class and log its greeting message to the console.


// Person class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of Person
const person1 = new Person("Rahul", 25);

// Logging the greeting message
console.log(person1.greet());
//test 2;
// dfine update age method in person class;

class Persone {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Method to update age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age is: ${this.age}`);
    }
}

// Create an instance of the Person class
const person2 = new Persone("John", 30);

// Log the greeting message
console.log(person2.greet());

// Update the age
person2.updateAge(35);
