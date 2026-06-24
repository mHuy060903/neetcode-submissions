class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count = 0;
        for(let i = s.length - 1; i >= 0; i--) {
            if(s[i] !== ' ') {
                count++
            }

            if(s[i] === ' ' && count > 0) {
                break;
            }
            
        }
        return count
    }
}
