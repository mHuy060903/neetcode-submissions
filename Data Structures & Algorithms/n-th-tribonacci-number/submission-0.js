class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const t = new Array(n + 1).fill(0)
        t[1] = 1
        t[2] = 1

        for(let i = 3; i < n; i++) {
            t[i] = t[i-1] + t[i-2] + t[t-3] 
        }

        return t[n]
     }
}
