// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.

function moveZeroes(nums) {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the first available position
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            nonZeroIndex++;
        }
    }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0] (All zeros moved to the end while maintaining the order of non-zero elements)