class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const length = nums.length
        let rightPointer = Math.floor(length/2);
        for(let i=0; i < Math.round(length/2); i++) {
            if(nums[i] === target) {
                return i
            }
            if (nums[rightPointer] === target) {
                return rightPointer
            }
            rightPointer++
        }
    return -1;
    }
}
