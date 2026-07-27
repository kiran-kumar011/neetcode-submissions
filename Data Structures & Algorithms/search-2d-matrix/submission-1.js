class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0; i<matrix.length; i++) {
            for(let j=0; j < matrix[i].length; j++) {
                const currentItem = matrix[i][j]
                    if(currentItem === target) {
                        return true;
                    }
                if(matrix[i][matrix[i].length-1] > target) {
                    const currentItem = matrix[i][j]
                    if(currentItem === target) {
                        return true;
                    }
                } else {
                    continue;
                }
            }
        }

        return false
    }
}
