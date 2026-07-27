class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const seen = new Set();            // reset per start index
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;       // stop when duplicate found
      seen.add(s[j]);
      longest = Math.max(longest, j - i + 1); // update as we grow
    }
  }

  return longest;
    }
}
