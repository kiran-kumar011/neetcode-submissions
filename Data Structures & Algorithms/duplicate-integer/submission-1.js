class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();
        let hasDuplicate = false
        for(let i=0; i < nums.length; i++) {
            if(!map.has(nums[i])) {
                map.add(nums[i]);
            } else {
                hasDuplicate = true
            }
        }
        return hasDuplicate
    }
}
