class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const m = new Map()
        const set = new Set()
        let result = ""

        for(let char of s) {
            m.set(char, (m.get(char) || 0) + 1)
        }

        for(let char of order) {
            if(m.has(char)) {
                for(let j = 1; j <= m.get(char); j++) {
                    result += char
                    set.add(char)
                }
            }

        }

        for(let char of s ) {
            if(!set.has(char)) {
                result+= char
            }
        }

        return result
    }
}
