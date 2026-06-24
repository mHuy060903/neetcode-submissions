class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const m = new Map()

        for(let i = 0; i < s.length; i++) {
            const char = s[i]
            const arr = m.get(char) || []
            arr.push(i)
            m.set(char, arr)
        }

        for(let k of m.keys()) {
            if(m.get(k).length === 1) {
                return m.get(k)[0]
            }
        }
        return -1
    }
}
