class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
       let count1 = 0
       let count0 = 0

       for(let i = 0; i < students.length; i++) {
        if(students[i] === 0) {
            count0 +=1
        } else {
            count1+=1
        }
       }

       for(let i = 0; i < sandwiches.length; i++) {
        if(sandwiches[i] === 0) {
           if(count0 === 0) {
            return count1
           } else {
            count0-=1
           }
        } else {
            if(count1 === 0) {
            return count0
           } else {
            count1-=1
           }
        }
       }

       return 0

    }
}
