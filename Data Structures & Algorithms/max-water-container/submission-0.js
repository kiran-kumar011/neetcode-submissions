class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const length = heights.length;
        let maxCalculatedArea = 0;
        for(let i=0; i < length; i++) {
            for(let j=1; j < length; j++) {
                let height; 
                if(heights[i] < heights[j]) {
                   height = heights[i] 
                } else {
                   height = heights[j]
                }
                const area = height * (j-i)
                if(area > maxCalculatedArea) {
                    maxCalculatedArea = area
                }
            }
        }
        return maxCalculatedArea
    }
}
