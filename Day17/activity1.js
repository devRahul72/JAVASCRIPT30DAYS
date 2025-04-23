//Test 1;
//"Write a recursive function that calculates the factorial of a number. Show the results in the console for some test cases."


function factorial(n) {
    console.log(n);
    if (n === 0 || n === 1) {
        return 1;

    }
    return n * factorial(n - 1);
}
 console.log(factorial(5));


 //test 2;
//Write a recursive function that calculates the nth Fibonacci number.Log the results in the console for different test cases."
 function fionacci(n){
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }
    else{ 
        return fionacci(n-1)+fionacci(n-2);
    }
    }
     console.log(fionacci(0));
     console.log(fionacci(1));
     console.log(fionacci(2));
     console.log(fionacci(3));
     console.log(fionacci(4));
     console.log(fionacci(5));



 