class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let length = nums.length;
        let left = 0, minNum = nums[0], midInd= length % 2 === 0 ?  Math.round(length / 2) : Math.round(length / 2)-1;
        if(nums[left] < nums[midInd]) {
            left = midInd;
        } else {
            length = midInd + 1;
        }
        while(left >= 0 && left < length) {
            if(nums[left] < minNum) {
                minNum = nums[left];
            }
            left++;
        }
        return minNum;
    }
}
