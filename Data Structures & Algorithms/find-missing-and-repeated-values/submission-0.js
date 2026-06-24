class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const arr = new Array((grid.length * grid.length) + 1).fill(0)
        const result = [0,0]
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                arr[grid[i][j]] += 1
            }
        }

         for(let i = 1; i < arr.length; i++) {
             if(arr[i] === 0) {
                    result[1] = i
                }

                if(arr[i]=== 2) {
                    result[0] = i
                }
         }

        return result

    }
}
