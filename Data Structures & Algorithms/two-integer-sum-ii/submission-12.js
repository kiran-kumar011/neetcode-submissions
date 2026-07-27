class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n=numbers.length-1
        let left = 0, right = n;
        while(left < right) {
            const sum = numbers[left] + numbers[right]
            if(sum === target) {
                return [left+1, right+1]
            } else if(sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return []
    }
}
