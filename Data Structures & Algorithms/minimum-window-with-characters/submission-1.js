class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
         if (t.length === 0 || s.length < t.length) return "";

        const need = new Map();
        for (const c of t) {
            need.set(c, (need.get(c) || 0) + 1);
        }

        const window = new Map();
        let have = 0;
        const needSize = need.size;

        let resLen = Infinity;
        let resLeft = 0;

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const c = s[right];
            window.set(c, (window.get(c) || 0) + 1);

            // Nếu ký tự c vừa đạt đúng số lượng cần → tăng "have"
            if (need.has(c) && window.get(c) === need.get(c)) {
                have++;
            }

            // Khi cửa sổ đã đủ (have === needSize), thử co lại từ bên trái
            while (have === needSize) {
                // Cập nhật kết quả nếu cửa sổ hiện tại ngắn hơn
                if (right - left + 1 < resLen) {
                    resLen = right - left + 1;
                    resLeft = left;
                }

                // Co cửa sổ: bỏ ký tự bên trái ra
                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);
                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    have--; // vừa thiếu lại ký tự này → không còn hợp lệ nữa
                }
                left++;
            }
        }

        return resLen === Infinity ? "" : s.slice(resLeft, resLeft + resLen);



       
    }
}
