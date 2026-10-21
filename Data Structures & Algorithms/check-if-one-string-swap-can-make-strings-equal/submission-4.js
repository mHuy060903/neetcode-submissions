class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    areAlmostEqual(s1, s2) {
        let d = 0

        if(s1.length !== s2.length) {
            return false
        }
        
        let d1 = -1
        let d2 = -1
        
        for(let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                d++;
                if (d > 2) return false; // dừng sớm
                if (d1 === -1) d1 = i;
                else d2 = i;
            }
        }

      
        
        if (d === 0) return true;   // đã bằng nhau sẵn
        if (d !== 2) return false;

        return s1[d1] === s2[d2] && s1[d2] === s2[d1];
    }
}
