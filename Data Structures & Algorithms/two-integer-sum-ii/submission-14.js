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

    //     o(n^2) complexity 
    //     iterates through the array and takes the first item and checks each element 
    //  in the nested loop checking the condition to add the value to the next 
    //     index valu and verifying whether it is equal to the target if it is eaual returning the indices +1 as per the requested logic
        // const len =  numbers.length;
        // for(let i=0; i < len; i++) {
        //     for(let j=i+1; j < len; j++) {
        //         // if(i === j) continue;
        //         if(numbers[i] + numbers[j] === target) {
        //             return [i+1, j+1]
        //         }
        //     }
        // }
        // return []

        let map = new Map();
        for(let i=0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            if(map.has(diff)) {
                return [map.get(diff), i+1];
            } else {
                map.set(numbers[i], i+1)
            }
        }
        return []
    }
}
