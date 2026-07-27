class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if (nums.length === 0) return 0;

        const set = new Set(nums);
        let longest = 0;

        for (let n of set) {
            // Only start from true sequence starts
            if (!set.has(n - 1)) {
            let cur = n;
            let len = 1;

            while (set.has(cur + 1)) {
                cur++;
                len++;
            }
            if (len > longest) longest = len;
            }
        }
        return longest;
    }
}
