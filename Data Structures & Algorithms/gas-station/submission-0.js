class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
         let total = 0;  // tổng xăng ròng cả vòng
        let tank = 0;   // xăng hiện có khi xuất phát từ start
        let start = 0;

        for (let i = 0; i < gas.length; i++) {
            const diff = gas[i] - cost[i];
            total += diff;
            tank += diff;

            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }

        return total >= 0 ? start : -1;
    }
}
