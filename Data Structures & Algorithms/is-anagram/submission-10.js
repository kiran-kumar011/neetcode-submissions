class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let map = new Map();
        for(let i=0; i<s.length; i++) {
            const char = s[i];
            map.set(char, (map.get(char) || 0) + 1)
        
        }
        
        
        for(let j =0; j < t.length; j++) {
            const char = t[j];
            if(map.has(char)) {
                const charLength = map.get(char);
                if (charLength > 1) {
                    map.set(char, charLength-1);
                } else {
                    map.delete(char)
                }
            }
        }

        return map.size === 0;
    }
}
