class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let k = 0;

        for(let i = 0; i < s.length; i++) {
            const char = s[i]

            while(t[k] !== char && k < t.length) {
                k++
            }
            if( k === t.length) {
                return false
            }
            k++
        }
        return true
    }
}
