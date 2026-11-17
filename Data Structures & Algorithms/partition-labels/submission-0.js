class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const m = new Map()

        for(let i = 0; i < S.length; i++) {
            m.set(S[i], i)
        }
        const result = []
        let start = 0
        let end = 0
        for(let i = 0; i < S.length; i++) {
            end = Math.max(end, m.get(S[i]))
            if(i === end) {
                result.push(end - start + 1)
                start = end + 1
            }
        }

        return result
    }
}
