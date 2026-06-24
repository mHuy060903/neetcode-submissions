class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        const m = new Map()

        for(let i = 0; i < words.length; i++) {
            for(let char of words[i]) {
                m.set(char, (m.get(char) || 0) + 1)
            }
        }
        const n = words.length;
        for(let k of m.keys()) {
          if(m.get(k) % n !== 0) {
            return false
          }
        } 

        return true
    }
}
