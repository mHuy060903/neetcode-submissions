class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDepth(s) {
        let max = 0

        let left = 0

        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') {
                left += 1
                  max = Math.max(max, left)
            } else if (s[i] === ')') {
                left -= 1
            } 
        }

        return max
    }

    isNumber(char) {
  return /^\d$/.test(char);
}
}
