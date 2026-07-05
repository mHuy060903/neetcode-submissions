class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let m1 = new Map()
        let m2 = new Map()

        for(let i = 0; i < s1.length; i++) {
            m1.set(s1[i], (m1.get(s1[i]) || 0) + 1)
        }

        for(let i = 0; i < s1.length; i++) {
             m2.set(s2[i], (m2.get(s2[i]) || 0) + 1)
        }
        
        for(let i = s1.length; i < s2.length; i++) {
            
            let isValid = true

            for(let k of m1.keys()) {
                if(!m2.has(k) || m2.get(k) !== m1.get(k)) {
                  isValid = false
                }
            }

            if(isValid) {
                return true
            }
 
             m2.set(s2[i], (m2.get(s2[i]) || 0) + 1)
             m2.set(s2[i-s1.length], m2.get(s2[i-s1.length]) - 1)



        }

        return false
    }
}
