class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const set = new Set()

        for(let char of t) {
            set.add(char)
        }

        let count = 0
        let l = 0
        let result = ""

        for(let r = 0; r < s.length; r++) {
            if(!set.has(s[r])) {
                l = Math.max(l, r+1)
            }
            count = Math.max(count, r - l + 1)
        }

        return count
    }
}
