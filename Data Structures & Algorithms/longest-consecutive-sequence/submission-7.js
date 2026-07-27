class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let longest = 0;
        for(let key of unique) {
            let length = 1;
            let curr = key
            console.log(key,"key");
            if(unique.has(curr-1)) {
                continue;
            } else {
                while(unique.has(curr + 1)) {
                    length++;
                    curr = curr+1;
                }
            }
            if(longest < length) longest = length;
        }
        return longest
    }
}
