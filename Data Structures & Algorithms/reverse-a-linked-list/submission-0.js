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
    reverseList(head) {
        let currentHead = head;
        let reversedList = null;
        while(currentHead) {
            reversedList = new ListNode(currentHead.val, reversedList)
            currentHead = currentHead.next
        }
        return reversedList;
    }
}
