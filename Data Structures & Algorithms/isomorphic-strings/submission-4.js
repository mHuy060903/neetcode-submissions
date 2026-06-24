class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {

        const m1 = new Map()
        const m2 = new Map()

        for(let i = 0; i < s.length; i++) {
          const charS = s[i]
          const charT = t[i]

          if(m1.has(charS) && m1.get(charS) !== charT) {
            return false
          }

          if(m2.has(charT) && m2.get(charT) !== charS) {
            return false
          }

          m1.set(charS, charT)
          m2.set(charT, charS)
        }
        return true
    }
}
