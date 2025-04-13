//Test 3;
// Define a Student class that extends the Person class.
// It should have a new property studentId and a method that returns the student ID.
// Then, create an instance of this class and log the student ID to the console.


// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, studentId) {
//       super(name, age); 
//       this.studentId = studentId;
//     }
  
//     getStudentId() {
//       return this.studentId;
//     }
//   }
//   const student1 = new Student("Ravi", 20, "STU12345");

//   console.log(`Student ID is: ${student1.getStudentId()}`);
  
  //test 4;
  // Base class: Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); 
      this.studentId = studentId;
    }
    greet() {
      return `Hi, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  const student1 = new Student("Ravi", 20, "STU12345");
  const person2 = new Person("Ravi", 20); 

  console.log(student1.greet());
  console.log(person2.greet());
  