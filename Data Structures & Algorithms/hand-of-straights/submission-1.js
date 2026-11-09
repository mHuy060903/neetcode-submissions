class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

    hand.sort((a, b) => a - b);
    const n = hand.length;
    const used = new Array(n).fill(false);

    for (let start = 0; start < n; start++) {
        if (used[start]) continue;        // lá này đã thuộc nhóm khác

        let next = hand[start] + 1;
        used[start] = true;
        let num = 1;

        for (let j = start + 1; j < n && num < groupSize; j++) {
            if (!used[j] && hand[j] === next) {
                used[j] = true;
                next++;
                num++;
            }
        }

        if (num !== groupSize) return false;
    }

    return true;
    }
}
