class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const m1 = new Map()
        const m2 = new Map()

        const array = s.split(' ')

        if(array.length !== pattern.length) {
            return false;
        }

        for(let i = 0; i < array.length; i++) {
            if(m1.has(pattern[i]) && m1.get(pattern[i]) !== array[i]) {
                return false
            }

             if(m2.has(array[i]) && m2.get(array[i])!== pattern[i]) {
                return false
            }
            m1.set(pattern[i], array[i])
            m2.set(array[i], pattern[i])
        }
        return true
    }
}
