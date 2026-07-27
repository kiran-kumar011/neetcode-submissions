class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        const lastseen = new Map()
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(lastseen.has(char) && lastseen.get(char) >= left) {
                left = lastseen.get(char) + 1;
            }
            lastseen.set(char, i);
            longest = Math.max(longest, i-left+1)
        }
        return longest
    }
}
