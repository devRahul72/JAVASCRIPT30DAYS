//test 3;
//arr distructing used and to print first and second index of arr;

let number =[1,2,3,4,5,6,7,8,9,10];
let [first,rest] = number;
console.log(first);
console.log(rest);

//test 4;
// Book object used and destructuring to get title and author of book print title and author;
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// Object destructuring
const { title, author } = book;

// Console पर log करें
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
