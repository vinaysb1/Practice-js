var rangeSum = function(nums, n, left, right) {
    let MOD = 1e9+7
    let subArrSum = [];
    for(let i=0;i<n;i++){
        sum=0;
        for(let j=i;j<n;j++){
            sum += nums[j];
            subArrSum.push(sum);
        }
    }
        subArrSum.sort((a,b)=>a-b)
     let result =0;
     for(let i=left-1;i<right;i++){
        result = (result+subArrSum[i]) % MOD
     }
     return result
    
};
console.log(rangeSum([1, 2, 3, 4], 4, 1, 5)); // Output: 13
console.log(rangeSum([1, 2, 3, 4], 4, 3, 4)); // Output: 6
console.log(rangeSum([1, 2, 3, 4], 4, 1, 10)); // Output: 50