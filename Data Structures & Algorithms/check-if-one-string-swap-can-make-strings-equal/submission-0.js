class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    areAlmostEqual(s1, s2) {
        const d = 0

        if(s1.length !== s2.length) {
            return false
        }
        
        let d1, d2 = -1
        
        for(let i = 0; i < s1.length; i++) {
            if(s1[i] !== s2[i]) {
                d+=1
                if(d1 < 0) {
                    d1 = i
                } else if(d2 < 0) {
                    d2 = i
                }
            }
        }

        if(d !== 2) {
            return false
        }
        
        s1[d1] = s1[d2]
        s1[d2] = s1[d1]

        return s1 === s2
    }
}
