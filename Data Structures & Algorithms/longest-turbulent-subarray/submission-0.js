class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let up = 1, down = 1
        let best = 1

        for(let i = 1; i < arr.length; i++) {
            if(arr[i - 1] < arr[i]) {
                up = down + 1
                down = 1
            } else if(arr[i] < arr[i - 1]) {
                down = up + 1
                up = 1
            } else {
                up = 1
                down = 1
            }

            best = Math.max(up, down, best)
        }

        return best
    }
}
