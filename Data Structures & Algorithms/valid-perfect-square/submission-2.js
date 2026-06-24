class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
       if(num < 2) {
        return true
       }

        let i = 0
        let j = Math.floor(num / 2)

        while(i <= j) {
            const mid = Math.floor((i + j) / 2)

            const total = mid * mid 

            if(total === num) {
                return true
            } else if(num < total) {
                j = mid - 1
            } else {
                i = mid + 1
            }
        }

        return false
    }
}
