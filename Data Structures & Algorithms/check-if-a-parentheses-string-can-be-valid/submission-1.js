class Solution {
    /**
     * @param {string} s
     * @param {string} locked
     * @return {boolean}
     */
    canBeValid(s, locked) {
        if(s.length % 2 !== 0) {
            return false
        }

        const stackLeft = []
        const stackUnlocked = []

        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(' && locked[i] === "1") {
                stackLeft.push(i)
            } else if(s[i] === ')' && locked[i] === "1") {
                if(stackLeft.length > 0) {
                    stackLeft.pop()
                } else if(stackUnlocked.length > 0) {
                    stackUnlocked.pop()
                } else {
                    return false
                }
            } else {
                stackUnlocked.push(i)
            }
        }

        while (stackLeft.length > 0) {
        if (stackUnlocked.length === 0) return false;
        if (stackUnlocked.pop() < stackLeft.pop()) return false;
    }
        return true
    }
}
