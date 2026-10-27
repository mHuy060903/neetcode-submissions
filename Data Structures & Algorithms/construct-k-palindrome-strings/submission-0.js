class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canConstruct(s, k) {
        if(s.length < k) {
            return false
        }

        const m = new Map()

        for(let char of s) {
            m.set(char, (m.get(char) || 0) + 1)
        }

        let odd = 0

        for(let k of m.keys()) {
            if(m.get(k) % 2 === 1) {
                odd += 1
            }
        }

        return odd < k
    }
}
