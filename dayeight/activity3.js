 //test 5;
 //use spread operator to create a new array with extra elements;
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);



//test 6;
//use to rest operator and print the total sum of the numbers;
function sum(...numbers) {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

// Function calls
console.log(sum(4, 5, 6));        
console.log(sum(10, 20));         
console.log(sum(1, 2, 3, 4, 5));  
console.log(sum());               
