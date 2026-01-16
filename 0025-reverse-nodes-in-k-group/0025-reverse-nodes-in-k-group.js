/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const dummyNode = new ListNode(0,head);
    let LastGroup = dummyNode;

    while(true){
        let kth = LastGroup;
        for(let i=0; i<k && kth; i++){
            kth = kth.next;
        }
        if(!kth) break;

        let startGroup = LastGroup.next;
        let nextFirst = kth.next;

        let crr = startGroup;
        let prev = nextFirst;

        while(crr !== nextFirst){
            let temp = crr.next;
            crr.next = prev;
            prev = crr;
            crr = temp;
        }
    LastGroup.next = kth;
    LastGroup = startGroup;
    }

    return dummyNode.next;
};