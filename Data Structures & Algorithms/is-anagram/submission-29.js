class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        };
        const sSet = new Array(26).fill(0);
        const tSet = new Array(26).fill(0);
        for(let i=0; i < s.length; i++) {
            sSet[s[i].charCodeAt() - 97]++;
            tSet[t[i].charCodeAt() - 97]++;
        }
        return sSet.join("") === tSet.join("")
    }
}
