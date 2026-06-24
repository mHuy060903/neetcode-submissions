class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
    const cols = new Map();
    const squares = new Map();

    for(let i = 0; i < 9; i++) {

        rows.set(i, new Set());
        cols.set(i, new Set());
    }

    for(let i = 0; i < 9; i++) {

        for(let j = 0; j < 9; j++) {

            const value = board[i][j];

            if(value === ".") continue;

            const squareKey =
                `${Math.floor(i/3)}-${Math.floor(j/3)}`;

            if(!squares.has(squareKey)) {
                squares.set(squareKey, new Set());
            }

            if(
                rows.get(i).has(value) ||
                cols.get(j).has(value) ||
                squares.get(squareKey).has(value)
            ) {
                return false;
            }

            rows.get(i).add(value);
            cols.get(j).add(value);
            squares.get(squareKey).add(value);
        }
    }

    return true;
    }
}
