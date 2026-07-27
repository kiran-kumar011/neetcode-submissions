class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        const result = new Map();
        for(let i=0; i < len; i++) {
            for(let j=i+1; j < len; j++) {
                for(let k = j+1; k < len; k++) {
                    
                    if(nums[i] + nums[j] + nums[k] === 0) {
                    
                        const sorted = [nums[i] , nums[j] , nums[k]].sort();
                        result.set(sorted.join("#"), [nums[i] , nums[j], nums[k]])
                    }
                }
            }
        } 
        
        return [...result.values()]
    }
}
