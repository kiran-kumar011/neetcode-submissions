class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, longest = 0; const lastSeen = new Map();
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(lastSeen.has(char) && lastSeen.get(char) >= left) {
                left = lastSeen.get(char) + 1;
            }
            lastSeen.set(char, i);
            longest = Math.max(longest, i - left +1);
        }
        return longest;
    }
}
