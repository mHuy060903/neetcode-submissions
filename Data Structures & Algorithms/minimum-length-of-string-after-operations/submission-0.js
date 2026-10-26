class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minimumLength(s) {
        const m = new Map()

        for(let c of s) {
            m.set(c, (m.get(c) || 0) + 1)
        }
        let count = 0
        for(let k of m.keys()) {
          if(m.get(k) < 3) {
            count += m.get(k)
          } else {
            if(m.get(k) % 2 == 0) {
                count += 2
            } else {
                count += 1
            }
          }
        }

        return count
    }
}
