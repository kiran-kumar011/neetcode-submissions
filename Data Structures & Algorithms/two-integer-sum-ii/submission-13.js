class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const n=numbers.length-1
        // let left = 0, right = n;
        // while(left < right) {
        //     const sum = numbers[left] + numbers[right]
        //     if(sum === target) {
        //         return [left+1, right+1]
        //     } else if(sum < target) {
        //         left++;
        //     } else {
        //         right--;
        //     }
        // }
        // return []


        const len =  numbers.length;
        for(let i=0; i < len; i++) {
            for(let j=i+1; j < len; j++) {
                if(i === j) continue;
                if(numbers[i] + numbers[j] === target) {
                    return [i+1, j+1]
                }
            }
        }
        return []
    }
}
