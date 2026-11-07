class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
         const n = s.length;
        if (s[n - 1] !== '0') return false;

        const dp = new Array(n).fill(false);
        dp[0] = true;
        let reachable = 0; // số ô tới được trong cửa sổ [j - maxJump, j - minJump]

        for (let j = 1; j < n; j++) {
            // ô mới vào cửa sổ
            if (j - minJump >= 0 && dp[j - minJump]) reachable++;
            // ô cũ rời cửa sổ
            if (j - maxJump - 1 >= 0 && dp[j - maxJump - 1]) reachable--;

            dp[j] = s[j] === '0' && reachable > 0;
        }

        return dp[n - 1];
    }
}
