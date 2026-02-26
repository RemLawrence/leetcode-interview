/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // THIS IS IMPORTANT - head may change after the kth node removal, so we set a static null node before the head. 
    // Then we can use nullNode.next to represent the new head.
    let nullNode = new ListNode(null, head);
    let trailing = nullNode;
    let leading = nullNode;
    for (let i = 0; i < n; i++) {
        leading = leading.next;
    }
    
    while (leading.next !== null) {
        trailing = trailing.next;
        leading = leading.next;
    }

    // remove trailing.next as kth from end of list
    trailing.next = trailing.next.next;
    return nullNode.next;
};
