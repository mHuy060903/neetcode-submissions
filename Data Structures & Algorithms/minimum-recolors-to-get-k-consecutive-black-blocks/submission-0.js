class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let min = blocks.length + 1

        let count = 0

        for(let i = 0; i < blocks.length; i++) {
            if(blocks[i] === 'W') {
                count += 1
            }

            if(i >= k - 1) {
            const pre = blocks[i - k]
            if(pre === 'W') {
                count -= 1
            }
            min = Math.min(min, count)
            }
        }

        return min
    }
}
