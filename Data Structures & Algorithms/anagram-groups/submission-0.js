class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const result = []
        for(let i = 0; i < strs.length; i++) {
           const sortedStr = strs[i].split("").sort().join("");
            
            if(map[sortedStr]) {
                map[sortedStr].push(strs[i])
            } else {
                map[sortedStr] = [strs[i]]
            }
        }

        for(let key in map) {
            result.push(map[key])
        }
        return result
    }
}
