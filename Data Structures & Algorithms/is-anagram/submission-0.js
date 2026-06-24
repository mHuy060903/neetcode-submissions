class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        const m = new Map()

        for(let i = 0; i < s.length; i++) {
            m.set(s[i], (m.get(s[i]) || 0) + 1)
        }

        for(let char of t) {
           if(!m.has(char)) {
            return false
           }

           m.set(char, (m.get(char) || 0) - 1)
           if(m.get(char) < 0) {
            return false
           } 
        }
        return true
    }
}
