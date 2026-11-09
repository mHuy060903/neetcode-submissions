class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const count = new Map();
        for (const x of hand) {
            count.set(x, (count.get(x) || 0) + 1);
        }

        const keys = [...count.keys()].sort((a, b) => a - b);

        for (const x of keys) {
            const c = count.get(x);
            if (c === 0) continue;

            for (let k = 0; k < groupSize; k++) {
                const have = count.get(x + k) || 0;
                if (have < c) return false;
                count.set(x + k, have - c);
            }
        }

        return true;
    }
}
