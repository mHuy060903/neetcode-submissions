class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {

        const m = new Map()
        let maxOdd = 0
        let minEven = Infinity

        for(let char of s) {
            m.set(char, (m.get(char) || 0) + 1)
        }

        for(let k of m.keys()) {
            if(m.get(k) % 2 === 1) {
                maxOdd = Math.max(maxOdd, m.get(k))
            } else {
                 minEven = Math.min(minEven, m.get(k))
            }

            
        }
        return maxOdd - minEven
    }
}
