class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
      const m = new Map()

      let max = -1;

      for(let i = 0; i < s.length; i++) {
        if(m.get(s[i]) >= 0) {
         max = Math.max(max, i - m.get(s[i]) - 1)
        } else {
          m.set(s[i], i)
        }
      }
      return max
    }
}
