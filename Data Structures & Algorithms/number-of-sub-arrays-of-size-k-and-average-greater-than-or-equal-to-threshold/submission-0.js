class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
            let sum = 0;

        for(let i = 0; i < k; i++) {
            sum += arr[i];
        }

        let count = 0;

        if(sum / k >= threshold) {
            count++;
        }

        for(let i = k; i < arr.length; i++) {

            sum += arr[i];
            sum -= arr[i - k];

            if(sum / k >= threshold) {
                count++;
            }
        }

        return count;
    }
}
