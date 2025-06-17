// // test 3;
// // used extend fuction ans apply the parent used super function 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// // Derived class: Student
// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age); // Call the parent class constructor
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return this.studentId;
//     }
// }

// // Create an instance of Student
// const student1 = new Student("Amit", 21, "S12345");
// ("Rahul", 22, "S67890");
// // Log the student ID
// console.log("Student ID:", student1.getStudentId());
// console.log(student1.greet());

//test 4;
//  overide the greet mehtod;
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
    constructor(name, age, studentId) {
        super(name, age); // Call the Person constructor
        this.studentId = studentId;
    }

    // Overriding the greet method
    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

// Create an instance of Student
const student1 = new Student("Amit", 21, "S12345");

// Log the overridden greeting message
console.log(student1.greet());
