class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countPalindromicSubsequence(s) {
          const res = new Set();

        const rec = (i, cur) => {
            if (cur.length === 3) {
                if (cur[0] === cur[2]) {
                    res.add(cur);
                }
                return;
            }
            if (i === s.length) {
                return;
            }
            rec(i + 1, cur);
            rec(i + 1, cur + s[i]);
        };

        rec(0, '');
        return res.size;
    }
}
