//Test 7;
//Write a recursive function that finds the index of a target element in an array. Log the results in the console for different test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    
    if (start > end) {
      return -1;
    }
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
  }
  
  
  const testArrays = [
    { arr: [1, 3, 5, 7, 9, 11], target: 5 },
    { arr: [2, 4, 6, 8, 10], target: 10 },
    { arr: [0, 1, 2, 3, 4], target: 7 },
    { arr: [], target: 1 },
  ];
  
  testArrays.forEach(({ arr, target }) => {
    const index = binarySearch(arr, target);
    console.log(`Searching for ${target} in [${arr}] ➝ Index: ${index}`);
  });
  
  //Test 8;
  // Write a recursive function that counts the number of occurrences of a target element in an array. Log the results in the console for different test cases.
  function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
      return 0;
    }
  
    
    const match = arr[index] === target ? 1 : 0;
  
    return match + countOccurrences(arr, target, index + 1);
  }
  const testCases = [
    { arr: [1, 2, 3, 2, 4, 2], target: 2 },
    { arr: [5, 5, 5, 5, 5], target: 5 },
    { arr: [1, 3, 5, 7], target: 2 },
    { arr: [], target: 1 },
  ];
  
  
  for (let i = 0; i < testCases.length; i++) {
    const arr = testCases[i].arr;
    const target = testCases[i].target;
  
    const count = countOccurrences(arr, target);
    console.log(`Element ${target} occurs ${count} time(s) in [${arr}]`);
  }
  