//test 7;
class Person {
  constructor(name, age) {
    this.name=name;
    this.age=age;
  }
  get fullname() {
    return ` ${this.name} ${this.age}`;
  }
}
  const person1 = new Person("Amit", 22);
  console.log(person1.fullname);
  
  //test 8;

  class student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get fullname() {
      return `${this.name} ${this.age}`;
    }
  
    set fullname(value) {
      const [name, age] = value.split(" ");
      this.name = name;
      this.age = age;
    }
  }
  
  const student1 = new student("Amit", 22);
  
  student1.fullname = "Amit Sharma";
  console.log(student1.fullname); // Output: Amit Sharma
  