class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
       const length = nums.length;
        let left = 0, right = length - 1, minNum = nums[0], midInd= length % 2 === 0 ?  Math.round(length / 2) : Math.round(length / 2)-1;
        let hasFinished = false;
        if(nums[left] < nums[midInd]) {
            left = midInd;
        } 
        while(left >= 0 && left < length) {
            if(nums[left] < minNum) {
                minNum = nums[left];
            }
            left++;
        }
        console.log(hasFinished, length, left)
        return minNum;
    }
}
