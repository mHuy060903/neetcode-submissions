class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
         let satisfied = 0;

        for(let i = 0; i < customers.length; i++) {
            if(grumpy[i] === 0) {
                satisfied += customers[i];
            }
        }

        let gain = 0;

        for(let i = 0; i < minutes; i++) {
            if(grumpy[i] === 1) {
                gain += customers[i];
            }
        }

        let maxGain = gain;

        for(let i = minutes; i < customers.length; i++) {

            if(grumpy[i] === 1) {
                gain += customers[i];
            }

            if(grumpy[i - minutes] === 1) {
                gain -= customers[i - minutes];
            }

            maxGain = Math.max(maxGain, gain);
        }

        return satisfied + maxGain;
    }
}
