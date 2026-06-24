class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

    for(const op of operations) {

        if(op === "+") {

            const n = stack.length;

            stack.push(
                stack[n - 1] +
                stack[n - 2]
            );
        }

        else if(op === "D") {

            stack.push(
                stack[stack.length - 1] * 2
            );
        }

        else if(op === "C") {

            stack.pop();
        }

        else {

            stack.push(Number(op));
        }
    }

    let sum = 0;

    for(const score of stack) {
        sum += score;
    }

    return sum;
    }
}
