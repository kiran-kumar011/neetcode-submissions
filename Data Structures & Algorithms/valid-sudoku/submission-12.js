class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let boxes = [];
        const length = board.length;
         for (let i = 0; i < 9; i++) {
            boxes.push(new Set());
        }

        for (let r = 0; r < length; r++) {
            const row = new Set();
            const col = new Set();
            for (let c = 0; c < length; c++) {
                const rowVal = board[r][c];
                const colVal = board[c][r];
                if (rowVal !== ".") {
                    if (row.has(rowVal)) {
                        return false;
                    } else {
                        row.add(rowVal);
                    }
                    const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    if (boxes[boxIndex].has(rowVal)) {
                        return false;
                    } else {
                        boxes[boxIndex].add(rowVal);
                    }
                }
                if (colVal !== ".") {
                    if (col.has(colVal)) {
                        return false;
                    } else {
                        col.add(colVal);
                    }
                }
                
            }
        }
        return true
        // let boxes = []
        // const length = board.length;
        // for(let i=0; i < length; i++) {
        //     boxes.push(new Set());
        // }
        // for(let rowI = 0; rowI < length; rowI++) {
        //     let rowSet = new Set();
        //     let colSet = new Set();
        //     for(let colI = 0; colI < length; colI++) {
        //         const rowVal = board[rowI][colI];
        //         const colVal = board[colI][rowI];
        //         if(rowVal !== ".") {
        //             if(rowSet.has(rowVal)) {
        //                 return true;
        //             } else {
        //                 rowSet.add(rowVal);
        //             }
        //             const boxI = Math.floor(rowI/3) * 3 + Math.floor(colI/3);
        //             if(boxes[boxI].has(rowVal)) {
        //                 return false;
        //             } else {
        //                 boxes[boxI].add(rowVal);
        //             }
        //         }
        //         if(colVal !== '.') {
        //             if(colSet.has(colVal)) {
        //                 return false;
        //             } else {
        //                 colSet.add(colVal);
        //             }
        //         }
                
        //     }
        // }
        // return true
    }
   
}
