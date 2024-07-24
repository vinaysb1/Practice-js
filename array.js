//productExceptSelf aproach-1
var productExceptSelf = function(nums) {
    const length = nums.length;
    const answer = new Array(length);
    
    // Initialize the answer array with 1s
    for (let i = 0; i < length; i++) {
        answer[i] = 1;
    }
    
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};

// Example usage:
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]

// productExceptSelf aproach-2
var productExceptSelf = function(nums) {
    const length = nums.length;
    const answer = new Array(length).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};

// Example usage:
const nums3 = [1, 2, 3, 4];
console.log(productExceptSelf(nums3)); // Output: [24, 12, 8, 6]

const nums4 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums4)); // Output: [0, 0, 9, 0, 0]

//  productExceptSelf aproach-3
var productExceptSelf = function(nums) {
    // Array to store all left multiplication
    const left = new Array(nums.length);

    // Array to store all right multiplication
    const right = new Array(nums.length);

    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = left[i] * right[i];
    }

    return ans;
};

// Example usage:
const nums5 = [1, 2, 3, 4];
console.log(productExceptSelf(nums5)); // Output: [24, 12, 8, 6]

const nums6 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums6)); // Output: [0, 0, 9, 0, 0]

// 152. Maximum Product Subarray
var maxProduct = function(nums) {
    let n = nums.length;
    let leftProduct = 1;
    let rightProduct =1;
    let ans = nums[0];
for(let i=0;i<n;i++){
    leftProduct = (leftProduct===0)?1:leftProduct;
    rightProduct = (rightProduct===0)?1:rightProduct
    leftProduct *=nums[i]
    rightProduct *=nums[n-1-i]
    ans = Math.max(ans,Math.max(leftProduct,rightProduct))
}
return ans;
};
let nums8 = [2, 3, -2, 4];
console.log(productExceptSelf(nums8))
let nums7 = [-2, 0, -1];
console.log(productExceptSelf(nums7))

// remove duplicates
function removeDuplicatesNew(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
  
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
  
    return i + 1;
  }