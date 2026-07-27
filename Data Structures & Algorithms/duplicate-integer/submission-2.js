class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(let i=0; i < nums.length; i++) {
            if(map.has(nums[i])) {
                // console.log("has item")
                return true
            } else {
                map.set(nums[i]);
            }
            console.log(map, i)
        }
        return false
    }
}
