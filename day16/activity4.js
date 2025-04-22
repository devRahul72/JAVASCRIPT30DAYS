//Test 7
//Write a function that memoizes the results of another function. Use closures to store previous results.
function memoize(fn) {
    const cache = {}; 
  
    return function (...args) {
      const key = JSON.stringify(args); 
  
      if (cache[key]) {
        console.log("Fetching from cache for args:", args);
        return cache[key]; 
      } 
  
      console.log("Calculating for args:", args);
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  
  function square(n) {
    return n * n;
  }
  function add(a,b){
    return a + b;
  }
  //test 8;
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  
  
  const memoizedSquare = memoize(square);
  const memoizedadd = memoize(add);
const memoizedfact = memoize(factorial);
  
  console.log(memoizedSquare(5)); // Calculating... 25
  console.log(memoizedSquare(5)); // From cache... 25
  console.log(memoizedSquare(6)); // Calculating... 36
  console.log(memoizedadd(6,5)); // From cache... 36
  console.log(memoizedadd(6,5)); // Calculating... 11
  console.log(memoizedfact(7)); // Calculating... 49
  console.log(memoizedfact(7)); // from cache... 49
