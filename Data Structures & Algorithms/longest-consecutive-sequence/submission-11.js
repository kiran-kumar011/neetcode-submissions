class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueArr = new Set(nums);
        let longest = 0;
        for(let i = 0; i < nums.length; i++) {
            // skip if there is an item less than the current index value
            if(uniqueArr.has(nums[i] -1)) continue;
            let len = 1;
            let count = nums[i];
            while(uniqueArr.has(count + 1)) {
                count++;
                len++;
            }
            longest = Math.max(len, longest)
        }
        return longest;
    }
}
