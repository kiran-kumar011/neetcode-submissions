class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let longest = 0;
        for(let key of unique) {
            if(unique.has(key-1)) continue;
            let length = 1;
            let curr = key
           
            while(unique.has(curr + 1)) {
                length++;
                curr = curr+1;
            }
        
            
            longest = Math.max(longest, length);
        }
        return longest
    }
}
