class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const length = nums.length
        // let leftPointer=0;
        // let rightPointer = length - 1;
        for(let i=0; i < length; i++) {
            if(nums[i] === target) {
                return i
            }
        }
    return -1;
    }
}
