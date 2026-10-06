class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle) {
          const n = triangle.length;
        const dp = triangle.map(row => [...row]); // copy để không sửa input gốc

        for (let i = n - 2; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
            }
        }

        return dp[0][0];
    }
}
