class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    twoCitySchedCost(costs) {
        costs.sort((x, y) => (x[0] - x[1]) - (y[0] - y[1]));

        const n = costs.length / 2;
        let total = 0;

        for (let i = 0; i < n; i++) {
            total += costs[i][0];       // n người đầu tới A
            total += costs[i + n][1];   // n người sau tới B
        }

        return total;
    }
}
