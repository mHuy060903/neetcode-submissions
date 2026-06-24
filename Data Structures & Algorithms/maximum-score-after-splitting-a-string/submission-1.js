class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {

        let max = 0;

        for(let i = 0; i < s.length-1; i++) {
            let l = i;
            let r = i + 1
            let numZero = 0
            let numOnes = 0

            while(l >= 0) {
                if(s[l] === "0") {
                    numZero += 1
                }
                l--
            }

            while(r < s.length) {
                if(s[r] === "1") {
                    numOnes += 1
                }
                r++
            }

            const total = numZero + numOnes
            max = Math.max(max, total)

        }

        return max
    }
}
