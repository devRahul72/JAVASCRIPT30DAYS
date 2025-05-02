#include <iostream>
#include <vector>
using namespace std;

// Function to rotate the array to the right by k steps
vector<int> rotateArrayRight(vector<int>& arr, int k) {
    int n = arr.size();  // Size of the array

    // If the array is empty or k is zero, no rotation needed
    if (n == 0 || k == 0) {
        return arr;
    }

    // Handle the case where k is larger than the array size
    k = k % n;  // No need to rotate more than n times

    // Create a new array to store the rotated values
    vector<int> rotated(n);

    // Fill the rotated array with the correct positions
    for (int i = 0; i < n; i++) {
        rotated[(i + k) % n] = arr[i];
    }

    return rotated;  // Return the rotated array
}
int main() {
    // Example array and number of rotations
    vector<int> arr = {1, 2, 3, 4, 5};
    int k = 2;

    // Call the rotateArrayRight function
    vector<int> rotated = rotateArrayRight(arr, k);

    // Print the rotated array
    for (int i = 0; i < rotated.size(); i++) {
        cout << rotated[i] << " ";
    }
    
    return 0;
}