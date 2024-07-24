//1636. Sort Array by Increasing Frequency  approach -1
var frequencySort = function(nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] = (counter[nums[i]] || 0) + 1
    }

    return nums.sort((a,b) => counter[a] === counter[b] ? b - a: counter[a] - counter[b])
};

// Approach-2
var frequencySort = function (nums) {
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    return nums.sort((a, b) => obj[a] === obj[b] ? b - a : obj[a] - obj[b]);
};