class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
         const stackLeft = [];  // chỉ số của '('
    const stackStar = [];  // chỉ số của '*'

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stackLeft.push(i);
        } else if (char === '*') {
            stackStar.push(i);
        } else {
            if (stackLeft.length > 0) {
                stackLeft.pop();
            } else if (stackStar.length > 0) {
                stackStar.pop();
            } else {
                return false;
            }
        }
    }

    // '(' còn dư phải được đóng bởi '*' đứng SAU nó
    while (stackLeft.length > 0 && stackStar.length > 0) {
        if (stackStar.pop() < stackLeft.pop()) return false;
    }

    return stackLeft.length === 0;
    }
}
