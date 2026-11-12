class Solution {
    /**
     * @param {number[]} x
     * @param {number[]} y
     * @return {number}
     */
    maxSumDistinctTriplet(x, y) {
       const map = new Map();

    for (let i = 0; i < x.length; i++) {
        if (!map.has(x[i]) || y[i] > map.get(x[i])) {
            map.set(x[i], y[i]);
        }
    }

    if (map.size < 3) return -1;

    const re = [...map.values()].sort((a, b) => b - a);

    return re[0] + re[1] + re[2];
        
    }
}
