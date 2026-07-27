class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const length = nums.length;
        const result = []
        const seen = new Set();
        for(let i = 0; i < length-2; i++) {
            for(let j= i+1; j < length-1; j++) {
                    for(let k= j+1; k < length; k++) {
                        if (nums[i] + nums[j] + nums[k] === 0) {
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        const key = triplet.join(',');

                        if (!seen.has(key)) {
                            seen.add(key);
                            result.push(triplet);
                        }
                    }
                }
            }
        }
        return result;
    }
}
