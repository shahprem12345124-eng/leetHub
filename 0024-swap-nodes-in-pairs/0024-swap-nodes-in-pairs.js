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
var swapPairs = function(head) {
   let dummyNode = new ListNode(0, head);
   let prev = dummyNode;
   while(prev.next && prev.next.next){
    let first = prev.next;
    let second = first.next;

    prev.next = second;
    first.next = second.next;
    second.next = first

    prev = first
   }

   return dummyNode.next;
};