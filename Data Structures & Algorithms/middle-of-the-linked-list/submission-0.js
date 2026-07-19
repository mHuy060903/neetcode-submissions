/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head) {
           let arr = [];
        let cur = head;
        while (cur) {
            arr.push(cur);
            cur = cur.next;
        }
        return arr[Math.floor(arr.length / 2)];
    }
}
