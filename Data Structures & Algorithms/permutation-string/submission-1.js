class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) {
        return false;
    }

    const m1 = new Map();
    const m2 = new Map();

    for(let ch of s1) {
        m1.set(ch, (m1.get(ch) || 0) + 1);
    }

    for(let i = 0; i < s1.length; i++) {
        m2.set(s2[i], (m2.get(s2[i]) || 0) + 1);
    }

    const sameMap = () => {

        if(m1.size !== m2.size) {
            return false;
        }

        for(let key of m1.keys()) {
            if(m1.get(key) !== m2.get(key)) {
                return false;
            }
        }

        return true;
    };

    if(sameMap()) {
        return true;
    }

    for(let i = s1.length; i < s2.length; i++) {

        m2.set(s2[i], (m2.get(s2[i]) || 0) + 1);

        const leftChar = s2[i - s1.length];

        m2.set(leftChar, m2.get(leftChar) - 1);

        if(m2.get(leftChar) === 0) {
            m2.delete(leftChar);
        }

        if(sameMap()) {
            return true;
        }
    }

    return false;
    }
}
