class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // longestConsecutive(nums) {
    //     const unique = new Set(nums);
    //     let longest = 0;
    //     for (let i = 0; i < nums.length; i++) {
    //         if (unique.has(nums[i] - 1)) continue;
    //         let len = 1;
    //         let count = nums[i];
    //         while (unique.has(count + 1)) {
    //             count++;
    //             len++;
    //         }
    //         longest = Math.max(longest, len);
    //     }
    //     return longest;
    // }
    longestConsecutive(nums){
        let longest = 0;
        let uniqueSet = new Set(nums);
        for(let i=0; i< nums.length; i++) {
            let value = nums[i];
            if(uniqueSet.has(value-1)) {
                continue;
            }
            let count = 1;
            while(uniqueSet.has(value+1)) {
                count++;
                value++;
            }
            longest = Math.max(count, longest);
        }
        return longest
    }
}
