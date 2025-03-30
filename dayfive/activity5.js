//test 9;
// Function to repeat a function a number of times
function repeatFunction(callback, times) {
    for (let i = 0; i < times; i++) {
       callback ( i + 1);
        
    }
}


function sayHello(count) {
    console.log(`Hello! (${count})`);
}

repeatFunction(sayHello, 5);

//test 10;
// Function to apply two functions to a valueand result;
function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1); 
    return result2; 
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

console.log(applyFunctions(double, square, 3));
