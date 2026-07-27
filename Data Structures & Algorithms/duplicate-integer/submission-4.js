class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const map = new Map();
       let i = 0;
       while(i < nums.length){
            if(map.has(nums[i])) {
                return true
            } else {
                map.set(nums[i])
            }
            i++
       }
       return false
    }
}
