class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let i=0; i < nums.length; i++) {
        //     for(let j=i+1; j < nums.length; j++) {
        //         if(nums[i] + nums[j] === target) {
        //             return [i, j]
        //         }
        //     }
        // }
        const map = {};
        for(let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if(diff in map) {
                return [map[diff], i]
            } 
            map[nums[i]] = i
        }        
    }

}
