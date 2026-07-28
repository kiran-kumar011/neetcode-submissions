class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const includes = {};
        for(let i=0; i < nums.length; i++) {
            if(includes[nums[i]]) {
                return true
            } else {
                includes[nums[i]] = true
            }
        }
        return false
    }
}
