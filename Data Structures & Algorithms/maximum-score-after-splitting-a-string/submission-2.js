class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let numZeros = 0
        let numOnes = 0
        let max = 0

        for(let char of s) {
                if(char === "1") {
                        numOnes+=1
                }
        }

        for(let i = 0; i < s.length - 1; i++) {
                if(s[i] === "1") {
                        numOnes-=1
                } else {
                      numZeros+=1  
                }

                max = Math.max(max, (numOnes + numZeros))
        }

        return max
        
    }
}
