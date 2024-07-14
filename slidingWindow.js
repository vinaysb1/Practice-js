// //Maximum sum of subarray
// function maxSumSubarray(arr, k) {
//   let maxSum = 0;
//   let windowSum = 0;
//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }
//   maxSum = windowSum;
//   for (i = k; i < arr.length; i++) {
//     windowSum += arr[i] - arr[i - k];
//     maxSum = Math.max(windowSum, maxSum);
//   }
//   return maxSum;
// }
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9

// max avg sum
function findMaxAverage(nums,k){
  let curSum =0 ;
  let maxSum = 0;
  for(let i=0;i<k;i++){
    curSum += nums[i];
  }
  maxSum = curSum;
  for(let i=k;i<nums.length;i++){
    curSum += nums[i]-nums[i-k]
    maxSum = Math.max(maxSum,curSum)
  }
  return maxSum/k;
}
const nums = [4,5,9,2,6,7,3,1,8];
const k = 3;
console.log(findMaxAverage(nums, k));