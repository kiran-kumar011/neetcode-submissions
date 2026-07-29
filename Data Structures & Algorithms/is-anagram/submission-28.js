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
            console.log(s[i].charCodeAt() - 97);
            console.log(t[i].charCodeAt() - 97);
            sSet[s[i].charCodeAt() - 97]++;
            tSet[t[i].charCodeAt() - 97]++;
        }
        console.log(sSet.join(""),"sSet");
        console.log(tSet.join(""),"tSet");
        return sSet.join("") === tSet.join("")
    }
}
