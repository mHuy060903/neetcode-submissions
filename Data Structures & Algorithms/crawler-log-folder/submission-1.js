class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let c = 0

        for(let i = 0; i < logs.length; i++) {
            if(logs[i] === './') {
                continue
            } else if (logs[i] === '../') {
                 c = Math.max(0, c - 1);
            } else {
                c+=1
            }
        }

        return c > 0 ? c : 0
    }
}
