class Solution {
    /**
     * @param {number[]} target
     * @param {number[]} arr
     * @return {boolean}
     */
    canBeEqual(target, arr) {
        const counts = Array(1001).fill(0);
        for (const x of target) counts[x]++;
        for (const x of arr) counts[x]--;
        return counts.every(x => x === 0);
    }
}
