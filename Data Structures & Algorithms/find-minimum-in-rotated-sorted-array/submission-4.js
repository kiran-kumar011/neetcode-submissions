class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // let length = nums.length;
        // let left = 0, minNum = nums[0], midInd= length % 2 === 0 ?  Math.round(length / 2) : Math.round(length / 2)-1;
        // if(nums[left] < nums[midInd]) {
        //     left = midInd;
        // } else {
        //     length = midInd + 1;
        // }
        // while(left >= 0 && left < length) {
        //     if(nums[left] < minNum) {
        //         minNum = nums[left];
        //     }
        //     left++;
        // }
        // return minNum;
        let left = 0, right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
            left = mid + 1;
            } else {
            right = mid;
            }
        }

        return nums[left];
    }
}
