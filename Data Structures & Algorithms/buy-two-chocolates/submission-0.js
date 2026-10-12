class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let min1 = Infinity,
            min2 = Infinity;

        for (const p of prices) {
            if (p < min1) {
                min2 = min1;
                min1 = p;
            } else if (p < min2) {
                min2 = p;
            }
        }

        const leftover = money - min1 - min2;
        return leftover >= 0 ? leftover : money;
    }
}
