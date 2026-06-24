class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let count = 0;
        for(let i = 0; i < this.matrix.length; i++) {
            
            for(let j = 0; j < this.matrix[0].length; j++) {
                if((i >= row1 && i <= row2) && (j >= col1) && (j <= col2)) {
                    count += this.matrix[i][j]
                }
            }
        }
        return count
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
