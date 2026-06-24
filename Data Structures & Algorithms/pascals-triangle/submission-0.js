class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if(numRows === 1) {
            return [[1]]
        }
        
        const result = [[1]]

        for(let i = 1; i < numRows; i++) {
            let temp = []
            for(let j = 0; j <= i; j++) {
                if(j === 0 || j === i) {
                    temp.push(1)
                } else {
                    temp.push(result[i - 1][j - 1] + result[i - 1][j])
                }
            }
            result.push(temp)
        }
        return result
        
    }
}
