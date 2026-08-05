class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countPalindromicSubsequence(s) {
            let res = 0;
        for (let ends = 'a'.charCodeAt(0); ends <= 'z'.charCodeAt(0); ends++) {
            for (let mid = 'a'.charCodeAt(0); mid <= 'z'.charCodeAt(0); mid++) {
                const seq =
                    String.fromCharCode(ends) +
                    String.fromCharCode(mid) +
                    String.fromCharCode(ends);
                let idx = 0,
                    found = 0;
                for (const c of s) {
                    if (seq[idx] === c) {
                        idx++;
                        if (idx === 3) {
                            found = 1;
                            break;
                        }
                    }
                }
                res += found;
            }
        }
        return res;
    }
}
