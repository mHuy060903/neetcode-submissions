class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
    const n = cardPoints.length;

    // Bắt đầu: lấy k thẻ đầu
    let cur = 0;
    for (let i = 0; i < k; i++) {
        cur += cardPoints[i];
    }
    let best = cur;

    // Đổi dần từng thẻ đầu thành thẻ cuối
    for (let i = 1; i <= k; i++) {
        cur -= cardPoints[k - i];          // bỏ thẻ đầu thứ (k - i)
        cur += cardPoints[n - i];          // thêm thẻ cuối thứ i
        best = Math.max(best, cur);
    }

    return best;
}
}
