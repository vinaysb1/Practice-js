//Maximum sum of subarray
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
