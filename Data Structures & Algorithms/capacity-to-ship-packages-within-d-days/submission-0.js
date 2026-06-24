class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
         let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    let answer = right;

    while (left <= right) {

        const mid = left + Math.floor((right - left) / 2);

        let daysNeeded = 1;
        let currentWeight = 0;

        for (const weight of weights) {

            if (currentWeight + weight > mid) {
                daysNeeded++;
                currentWeight = weight;
            } else {
                currentWeight += weight;
            }
        }

        if (daysNeeded <= days) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
    }
}
