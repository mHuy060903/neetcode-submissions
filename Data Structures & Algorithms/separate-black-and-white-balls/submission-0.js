class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minimumSteps(s) {
        let result = 0
        let blackBall = 0

        for(let i = 0; i < s.length; i++) {
            if(s[i] === '1') {
                blackBall+=1
            } else {
                result +=blackBall
            }
        }
        return result
    }
}
