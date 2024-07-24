//1636. Sort Array by Increasing Frequency  approach -1
var frequencySort = function(nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] = (counter[nums[i]] || 0) + 1
    }

    return nums.sort((a,b) => counter[a] === counter[b] ? b - a: counter[a] - counter[b])
};

// 