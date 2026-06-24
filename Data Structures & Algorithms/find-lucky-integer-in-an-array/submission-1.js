class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const map = new Array(501).fill(0)

        for(let i = 0; i < arr.length; i++) {
            map[arr[i]] = map[arr[i]] + 1
        }

         for (let i = 500; i >= 1; i--) {

            if (map[i] === i) {
                return i;
            }
        }
        return -1
    }
}
