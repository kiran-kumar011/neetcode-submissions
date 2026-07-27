class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const values = {}
        for(let i=0; i < strs.length; i++) {
           const freq = new Array(26).fill(0);
           for(let j=0; j < strs[i].length; j++) {
                freq[strs[i][j].charCodeAt() - 97]++
           }
           const key = freq.join('#');
           if(values[key]) {
                values[key].push(strs[i])
           } else {
                values[key] = [strs[i]]
           }
        }
        return Object.values(values);
    }
}
