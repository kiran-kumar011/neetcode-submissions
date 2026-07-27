class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i=0; i<nums.length; i++) {
            const difference = target - nums[i];
            if(!map.has(nums[i])) {
                map.set(difference, i)
            } else {
                return [ map.get(nums[i]),i ]
            }
            console.log(map,i)
        }
        return []
    }
}
