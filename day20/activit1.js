//Test 1
//implement bubble sort algorithm in javascript and print the sorted array;
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [5, 3, 1, 4, 2];
console.log(`before apply bubblesort:${arr}`);
console.log(bubbleSort(arr));

//Test 2;
//implement selection sort algorithm in javascript and print the sorted array;
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
const arr1=[5, 3, 1, 4, 2];
console.log(`before apply selection sort:${arr1}`);


console.log(selectionSort(arr1));