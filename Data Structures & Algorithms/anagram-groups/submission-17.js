class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const values = {}
    //     for(let i=0; i < strs.length; i++) {
    //         const key = Array(26).fill(0);
    //         const str = strs[i]
    //         for(let j=0; j < str.length; j++) {
    //             key[str[j].charCodeAt() - 97]++;
    //         }
    //         if(key in values) {
    //             values[key].push(str);
    //         } else {
    //             values[key] = [str];
    //         }
            
    //     }
    //     return Object.values(values);
    // }

    groupAnagrams(strs) {
        const result = new Map();
        for(let i=0; i< strs.length; i++) {
            const iCharSet = new Array(26).fill(0);
            const str = strs[i];
            for(let j=0; j < str.length; j++) {
                iCharSet[str[j].charCodeAt() -97]++;
            }
            const key = iCharSet.join('#')
            if(result.has(key)) {
                result.get(key).push(str);
            } else {
                result.set(key, [str]);
            }
        }
        return [...result.values()]
    }

}
