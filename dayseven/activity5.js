//test 8;
//create a object of book and use for loop to print the keys and values of the book object;
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
   
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
//test 9
//use Object.keys() and Object.values() to print the keys and values of the book object;
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));