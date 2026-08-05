class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = [],
            cols = [],
            boxes = [];

         for (let i = 0; i < 9; i++) {
            boxes.push(new Set());
        }

        for (let r = 0; r < board.length; r++) {
            const row = new Set();
            const col = new Set();
            for (let c = 0; c < board.length; c++) {
                const rv = board[r][c];
                const cv = board[c][r];
                if (rv !== ".") {
                    if (row.has(rv)) {
                    return false;
                    } else {
                    row.add(rv);
                    }
                }
                if (cv !== ".") {
                    if (col.has(cv)) {
                    return false;
                    } else {
                    col.add(cv);
                    }
                }
                if(rv !== '.') {
                    const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    if (boxes[boxIndex].has(rv)) {
                        return false;
                    } else {
                        boxes[boxIndex].add(rv);
                    }
                }
            }
            rows.push(row);
            cols.push(col);
        }
        return true
    }
}
