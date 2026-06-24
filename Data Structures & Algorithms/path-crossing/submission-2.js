class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {

        let x = 0;
        let y = 0;

        const visited = new Set();

        // add starting point
        visited.add("0,0");

        for (const dir of path) {

            if (dir === "N") {
                y++;
            } else if (dir === "S") {
                y--;
            } else if (dir === "E") {
                x++;
            } else {
                x--;
            }

            const pos = `${x},${y}`;

            if (visited.has(pos)) {
                return true;
            }

            visited.add(pos);
        }

        return false;
    }
}
