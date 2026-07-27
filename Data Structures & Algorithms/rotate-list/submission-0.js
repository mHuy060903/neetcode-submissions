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
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
         if (!head) return null;

    const arr = [];

    let cur = head;

    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }

    const t = k % arr.length;

    const temp = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        temp[(i + t) % arr.length] = arr[i];
    }

    const dummy = new ListNode(0);
    let cur1 = dummy;

    for (let i = 0; i < temp.length; i++) {
        cur1.next = new ListNode(temp[i]);
        cur1 = cur1.next;
    }

    return dummy.next;
    }
}
