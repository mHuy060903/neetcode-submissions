class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [x, y, z] = target;
        let hasX = false, hasY = false, hasZ = false;

        for (const [a, b, c] of triplets) {
            // bỏ bộ ba có thành phần vượt target
            if (a > x || b > y || c > z) return false;

            if (a === x) hasX = true;
            if (b === y) hasY = true;
            if (c === z) hasZ = true;
        }

        return hasX && hasY && hasZ;
    }
}
