//Test 3;
//Write a recursive function that calculates the sum of all elements in an array. Log the results in the console for different test cases."
function sumarr(arr){
    console.log(arr);
    if(arr.length===0){
        return 0;
    }
    return arr[0]+sumarr(arr.slice(1));
}
console.log(sumarr([1,2,3,4,5]));

//Test 4;
//Write a recursive function that finds and returns the maximum element inside an array.Log the results in the console for different test cases.

function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    const maxRest = findMax(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
  }
  console.log(findMax([3, 7, 1, 5, 2]));
  