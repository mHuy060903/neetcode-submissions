class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
     combine(n, k) {
        const res = [];

        const backtrack = (i, comb) => {
            if (i > n) {
                if (comb.length === k) {
                    res.push([...comb]);
                }
                return;
            }

            comb.push(i);
            backtrack(i + 1, comb);
            comb.pop();
            backtrack(i + 1, comb);
        };

        backtrack(1, []);
        return res;
    }
}
