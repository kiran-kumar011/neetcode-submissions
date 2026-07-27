class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Len = s1.length;
        const sorted = s1.split("").sort().join("");
        for(let i=0; i< s2.length; i++) {
            const string = s2.slice(i, i+s1Len).split("").sort().join("")
            if(string === sorted) {
                return true
            }
        }
        return false
    }
}
