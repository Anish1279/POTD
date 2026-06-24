/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
    let slow = head, fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        [slow.next, prev, slow] = [prev, slow, slow.next];
    }

    let res = 0;
    while (slow) {
        res = Math.max(res, prev.val + slow.val);
        [prev, slow] = [prev.next, slow.next];
    }

    return res;
};