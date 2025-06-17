// //test 5;
// //Define a static method in the Person class that returns a generic greeting message.
// //Call this method without creating any instance of the class and log the message.


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Instance method
//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     // Static method
//     static genericGreeting() {
//         return "Hello! Welcome to the system.";
//     }
// }

// // Call the static method without creating an instance
// console.log(Person.genericGreeting());

//test 6;
// Base class: Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Derived class: Student
class Student extends Person {
    // Static property to track total number of students
    static totalStudents = 0;

    constructor(name, age, studentId) {
        super(name, age); // Call the parent constructor
        this.studentId = studentId;

        // Increment static property
        Student.totalStudents++;

        // Log total students
        console.log(`Total students: ${Student.totalStudents}`);
    }

//     getStudentId() {
//         return this.studentId;
//     }
 }
