function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case
    }
  
    let pivot = arr[arr.length - 1]; // Pivot liya last element
    let left = [];
    let right = [];
  
    for (let i = 0; i < arr.length - 1; i++) { // Last element ko ignore karke compare
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort left and right, pivot ko beech mein daalo
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  let array = [10, 7, 8, 9, 1, 5];
  let sortedArray = quickSort(array);
  console.log("Sorted Array:", sortedArray);
  