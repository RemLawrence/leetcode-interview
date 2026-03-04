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

function frequenciesOfElements(head: ListNode | null): ListNode | null {
    const hashMap = new Map();
    let curr = head;
    while (curr !== null) {
        const val = curr.val;
        const count = hashMap.get(val) ?? 0;
        hashMap.set(val, count + 1);
        curr = curr.next
    }
    
    let newHead;
    let newCurr;
    for (const [key, value] of hashMap) {
        const node = new ListNode(value, null)
        if (!newHead) {
            newHead = node;
            newCurr = node;
        } else {
            newCurr.next = node;
            newCurr = newCurr.next;
        }
    }
    return newHead;
};
