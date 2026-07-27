class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const uniques = new Set(nums)
       
       return uniques.size !== nums.length
    }
}
