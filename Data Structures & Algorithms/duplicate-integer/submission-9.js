class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const mapNums = {};
       for(let i=0; i<nums.length; i++) {
            if(mapNums[nums[i]]) {
                return true;
            } else {
                mapNums[nums[i]] = true;
            }
       }
       return false
    }
}
