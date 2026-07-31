class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const values = {}
        for(let i=0; i < strs.length; i++) {
            const key = Array(26).fill(0);
            const str = strs[i]
            for(let j=0; j < str.length; j++) {
                key[str[j].charCodeAt() - 97]++;
            }
            if(key in values) {
                values[key].push(str);
            } else {
                values[key] = [str];
            }
            
        }
        console.log(values,"values")
        return Object.values(values);
    }
}
