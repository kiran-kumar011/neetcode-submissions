class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let longest = 0;
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    set.clear();
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        longest = Math.max(longest, j - i);
        break;
      }
      set.add(s[j]);
      // if we reached the end without a duplicate, update longest
      if (j === s.length - 1) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }
  return longest;
    }
}
