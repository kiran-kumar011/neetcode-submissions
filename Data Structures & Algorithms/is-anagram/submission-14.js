class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
         const map = new Map();
        for(let i=0; i< s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0)+1)
        }
        console.log(map,"map");
        for(let j=0; j < t.length; j++) {
            if(map.get(t[j]) > 1) {
                map.set(t[j], map.get(t[j]) - 1)
            } else {
                map.delete(t[j])
            }
        }

        return map.size === 0;
    }
}
