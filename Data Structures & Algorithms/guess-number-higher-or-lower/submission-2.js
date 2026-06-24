/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let i = 1
        let j = n

        while(i <= j) {
            const mid = Math.floor((i + j) / 2)
            const t = guess(mid) 
            if(t === 0) {
                return mid
            } else if (t === -1) {
               j = mid - 1
            } else {
                i = mid + 1
            }
        }
       
    }
}
