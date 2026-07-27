class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = new Map()
        for(let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split('').sort().join('')
            if(seen.has(sorted)) {
                seen.set(sorted, [...seen.get(sorted), strs[i]])
            } else {
                seen.set(sorted, [strs[i]]);
            }
        }
        const result = []
        for(let [_, values] of seen.entries()) {
            result.push(values)
        }
        return result;
    }
}
