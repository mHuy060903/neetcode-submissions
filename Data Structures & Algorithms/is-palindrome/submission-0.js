class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         const t = s
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

        let i = 0;
        let j = t.length - 1

        while(i < t.length / 2) {
            if(t[i] !== t[j]) {
                return false
            }
            i++
            j--
        }

        return true

        
    }
}
