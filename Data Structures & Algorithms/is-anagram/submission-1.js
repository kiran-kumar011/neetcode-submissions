class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = new Map();
        let result = true;
        for(let i=0; i<s.length; i++) {
            const char = s[i];
            if(!map.has(char)) {
                map.set(char, 1);
            } else {
                map.set(char, map.get(char) + 1)
            }
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
            } else {
                result = false;
            }
        }

        return result;
    }
}
