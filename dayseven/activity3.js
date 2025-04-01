//test 5;
//create a book library and add books to the library library.books and console.log the library object and books array;
const library = {
    name: "City Library",
    books: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            year: 2018
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            year: 2016
        }
    ]
};
console.log(library);
console.log(library.books);
    //test 6;
    //access the library object and books array and console.log the value;console.log("Library Name:", library.name);

// Saari books ke titles ko print karna
console.log("Books in the Library:");
library.books.forEach(book => console.log(book.title));