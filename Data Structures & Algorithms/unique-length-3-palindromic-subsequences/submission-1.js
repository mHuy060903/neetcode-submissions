class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countPalindromicSubsequence(s) {
          const res = new Set();

        for (let i = 0; i < s.length - 2; i++) {
            for (let j = i + 1; j < s.length - 1; j++) {
                for (let k = j + 1; k < s.length; k++) {
                    if (s[i] !== s[k]) {
                        continue;
                    }
                    res.add(s[i] + s[j] + s[k]);
                }
            }
        }
        return res.size;
    }
}
