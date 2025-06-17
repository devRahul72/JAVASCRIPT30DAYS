
function add(a, b) {
  return a + b;
}

export { add };

const person = {
  name: "Amit",
  age: 25,

  greet() {
    console.log(`Hello, mera naam ${this.name} hai.`);
  },

  birthday() {
    this.age += 1;
    console.log(`Happy Birthday! Ab meri age ${this.age} ho gayi hai.`);
  }
};

export { person };
