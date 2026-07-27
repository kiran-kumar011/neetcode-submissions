class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = [];
        const stringMap = new Map()
        let i = 0;
        while(i < strs.length) {
            const sorted = strs[i].split('').sort().join('');
            stringMap.set(sorted, [...(stringMap.get(sorted) || []), strs[i]]);
            i++
        }
        console.log(stringMap,"mapped")
        for(let [key, _] of stringMap) {
            console.log(stringMap.get(key),"value")
            group.push(stringMap.get(key))
        }
        return group;
    }
}
