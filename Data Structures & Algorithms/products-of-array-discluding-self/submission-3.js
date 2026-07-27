class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let i = 0;
        let product;
        while(i < nums.length) {
            product = 1;
            let j = 0;
            while(j < nums.length) {
                if(i !== j) {
                    product *= nums[j]
                }
                j++;
            }
            result.push(product);
            i++;
        }
        return result;
    }
}
