class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let sRow = 0
        let eRow = matrix.length - 1

        while(sRow <= eRow) {
           const mRow = sRow + Math.floor((eRow - sRow) / 2)
           const arr = [...matrix[mRow]]
           if(arr[0] <= target && 
           arr[arr.length - 1] >= target) {
            let i = 0
            let j = arr.length - 1

            while(i <= j) {
                const m = i + Math.floor((j - i) / 2)
                if(arr[m] === target) {
                    return true
                }
                if(arr[m] < target) {
                    i = m + 1
                } else {
                    j = m - 1
                }
            }
           }

           if(arr[arr.length - 1] < target) {
               sRow = mRow + 1
           } else {
               eRow = mRow - 1
           }
        }
        return false
    }
}
