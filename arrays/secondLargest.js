// Second Largest Number
// Brute Force Approach
function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr)); // O(n)
  
    uniqueArr.sort((a, b) => {
     
      return b - a;
    });
  
    if (uniqueArr.length >= 2) {
      return uniqueArr[1];
    } else {
      return -1;
    }
  }
// Optimised Approach
  function secondLargestOptimised(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] != largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  console.log(secondLargestOptimised([10, 5, 10]));