/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummyNode = new ListNode(0, head);
    let prev = dummyNode;

    while (prev.next !== null && prev.next.next !== null) {
        let firstNode = prev.next;
        let secondNode = firstNode.next;
        let nextPair = secondNode.next;

        prev.next = secondNode;
        secondNode.next = firstNode;
        firstNode.next = nextPair;

        prev = firstNode;
    }

    return dummyNode.next;
};