/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let crr1 = list1, crr2 = list2;

    while(crr1 !== null && crr2 !== null){
        if(crr1.val < crr2.val){
            temp.next = crr1;
            crr1 = crr1.next;
        } else{
            temp.next = crr2;
            crr2 = crr2.next;
        }

        temp = temp.next;
    }

    temp.next = crr1 !== null? crr1 : crr2;

    return dummyNode.next;
};