class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = new Map();
        for(let i = 0; i < strs.length; i++) {
            const counts = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                counts[strs[i][j].charCodeAt() - 97]++
            }
            const key = counts.join('#')

            if(!seen.has(key)) seen.set(key, []);
            seen.get(key).push(strs[i])
        }
        return Array.from(seen.values())
    }
}
