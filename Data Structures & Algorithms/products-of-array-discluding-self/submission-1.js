class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        for(let i=0; i < nums.length; i++) {
            const spliced = [...nums];
            spliced.splice(i, 1);
            let product = spliced[0]
            for(let j=1; j < spliced.length; j++) {
                product *= spliced[j]
            }
            result.push(product)
            
        }
        return result;
    }
}
