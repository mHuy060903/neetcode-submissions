class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b)

        let c = 0

        let i = 0
        let j = people.length - 1

        while(i <= j) {
            const sum = people[i] + people[j]

            if(sum <= limit) {
                j--
                i++
            } else {
               j--
            }
            c++
        }
        return c
    }
}
