class Solution {
    /**
     * @param {number[]} values
     * @return {number}
     */
    maxScoreSightseeingPair(values) {
        let bestLeft = values[0] + 0;
        let result = -Infinity;

        for (let j = 1; j < values.length; j++) {
            result = Math.max(result, bestLeft + values[j] - j);
            bestLeft = Math.max(bestLeft, values[j] + j);
        }

        return result;
    }
}
