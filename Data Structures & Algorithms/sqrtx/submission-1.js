class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x <= 2) {
            return x
        } 

         let i = 1;
    let j = Math.floor(x / 2);

    let ans = 0;

    while(i <= j) {

        const mid = Math.floor((i + j) / 2);

        const square = mid * mid;

        if(square === x) {
            return mid;
        }

        if(square < x) {
            ans = mid;
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return ans;
    }
}
