//test 7;;
//create a object of book and add fucntion to return  year and console.log the result;
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,

    // Method to return book title and year
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};

// Method ko call karke result console par log karna
console.log(book.getTitleAndYear());
