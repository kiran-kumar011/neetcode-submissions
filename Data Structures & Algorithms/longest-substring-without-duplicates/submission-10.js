class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
  const lastSeen = new Map(); // char -> last index seen
  let left = 0;               // start index of current window

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // If we've seen ch inside the current window, move left past its last occurrence
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }

    lastSeen.set(ch, right);                         // update last seen index
    longest = Math.max(longest, right - left + 1);   // update best length
  }

  return longest;
    }
}
