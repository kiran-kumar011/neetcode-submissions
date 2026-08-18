class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len = s1.length;
        const sortedS1= s1.split("").sort().join("")
        for(let i=0; i<s2.length; i++) {
            const sliced = s2.slice(i, len+i).split("").sort().join("");
            if(sliced === sortedS1) {
                return true
            }
        }
        return false
    }
}
