class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 1) {
            if(target === nums[0]) {
                return 0
            } else {
                return -1
            }
        } 
        let length;
        let index; 
        if (nums[Math.round(nums.length / 2)] > target) {
            index = 0;
            length= Math.round(nums.length / 2);
        } else {
            index =   Math.round(nums.length / 2);
            length = nums.length;
        } 

        for(let i=index; i < length; i++) {
            if(nums[i] === target) {
                return i;
            }
        }
    return -1;
    }
}
