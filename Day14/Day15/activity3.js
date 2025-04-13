//Test 5;
// Create a static method in the Person class that returns a generic greeting message.
// Call this method without creating any instance, and log the message to the console.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    static genericGreet() {
      return "Hello! Welcome to the Person class.";
    }
  }
  console.log(Person.genericGreet());
  
//Test 6;
//Student class me ek static property banao jo total number of students track kare.
//Constructor me is property ko increment karo aur total students ko log karo.

class Student {
  // 🔢 Static property to track total students
  static totalStudents = 0;

  constructor(name, age, studentId) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;

    
    Student.totalStudents++;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, ID: ${this.studentId}`;
  }
  static logTotalStudents() {
    console.log(`Total students: ${Student.totalStudents}`);
  }
}
const student1 = new Student("Ravi", 20, "STU001");
const student2 = new Student("Priya", 21, "STU002");
Student.logTotalStudents(); 
