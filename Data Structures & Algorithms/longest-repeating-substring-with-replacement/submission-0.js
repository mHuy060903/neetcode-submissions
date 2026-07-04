class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let m = new Map()
        let l = 0
        let max = 0

        for(let r = 0; r < s.length; r++) {
            m.set(s[r], (m.get(s[r]) || 0) + 1)
            const mF = Math.max(...m.values())
            const currentLength = r - l + 1
            
            if(currentLength - mF <= k) {
                
                max = Math.max(max, currentLength)
            } else {
                m.set(s[l], m.get(s[l]) - 1)
                l+=1
            }
            

        }
        return max
    }
}
