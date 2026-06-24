class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let startWith0 = 0
        let startWith1 = 0

        for(let i = 0; i < s.length; i++) {
            const expectStart0 = i % 2 === 0 ? "0" : "1"
            const expectStart1 = i % 2 === 0 ? "1" : "0"

            if(s[i] !== expectStart0) {
                startWith0+=1
            }

            if(s[i] !== expectStart1) {
                startWith1+=1
            }
        }

        return Math.min(startWith0, startWith1)
    }
}
