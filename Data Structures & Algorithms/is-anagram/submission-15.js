class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const seen = new Map();
        for(let i=0; i < s.length; i++) {
            const char = s[i];
            seen.set(char, (seen.get(char) || 0) +1)
        }

        for(let j=0; j<t.length; j++) {
            const char = t[j];
            if(seen.get(char) > 1) {
                seen.set(char, seen.get(char) -1)
            } else {
                seen.delete(char);
            }
        }
        return seen.size === 0
    }
}
