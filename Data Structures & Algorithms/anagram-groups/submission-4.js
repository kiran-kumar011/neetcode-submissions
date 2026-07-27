class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i=0; i < strs.length; i++) {
            const sort = strs[i].split('').sort().join('');
            console.log(sort,"sort")
            if(map.has(sort)) {
                map.set(sort, [...map.get(sort), strs[i]])
            } else {
                map.set(sort, [strs[i]])
            }
        }
        const result = [];
        for(let [_, value] of map) {
            result.push(value)
        }
        return result;
    }
}
