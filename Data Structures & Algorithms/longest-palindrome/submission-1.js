class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const m = new Map()
        for(let char of s) {
            m.set(char, (m.get(char) || 0) + 1)
        }
        let count = 0
        let hasOdd = false

        for(let k of m.keys()) {
          if(m.get(k) % 2 === 0) {
            count += m.get(k)
          } else {
            count += m.get(k) - 1
            hasOdd = true
          }
        }

        if(hasOdd) {
          count += 1
        }

        return count
    }
}
