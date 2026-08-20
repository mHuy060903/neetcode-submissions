class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
         let N = pref.length,
            res = 0;

        for (let w of words) {
            if (w.length < N) continue;
            let inc = 1;
            for (let i = 0; i < N; i++) {
                if (w[i] !== pref[i]) {
                    inc = 0;
                    break;
                }
            }
            res += inc;
        }

        return res;
    }
}
