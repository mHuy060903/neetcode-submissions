class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       const m = new Map()
       let count = 0
       let l = 0

       for(let r = 0; r < s.length; r++) {
        if(m.has(s[r])) {
            l = m.get(s[r]) + 1
        }

        m.set(s[r], r)

        count = Math.max(count, r - l + 1)
       }

       return count

    }
}
