class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const map = {};
        // for(let i=0; i < numbers.length; i++) {
        //     const diff = target - numbers[i];
        //     if(diff in map) {
        //         return [map[diff]+1, i+1];
        //     } else {
        //         map[numbers[i]] = i;
        //     }
        // }
        let left = 0;
        let right = numbers.length -1;
        while(left < right) {
            const sum = numbers[left] + numbers[right];
            if(sum > target) {
                right--;
            } else if (sum < target)  {
                left++;
            } else {
                return [left+1, right+1];
            }
        }
    }
}
