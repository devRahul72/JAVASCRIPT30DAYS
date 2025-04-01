//test 3;
//create a object and assing the title, author and year to the object ana add method to return string and update the year;

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,

    // Method to return book details
    getDetails() {
        return `${this.title} by ${this.author}`;
    },

    // Method to update the year
    updateYear(newYear) {
        this.year = newYear;
    }
};

// Update the book's year
book.updateYear(2024);

// Log the updated book object
console.log(book);
