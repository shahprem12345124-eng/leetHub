/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(!lists || lists.length === 0) return null;

  const MergeKList = (l1, l2) =>{
    const dummyList = new ListNode(0);
    let crr = dummyList;

    while(l1 && l2){
        if(l1.val <= l2.val){
            crr.next = l1;
            l1 = l1.next;
        } else{
            crr.next =  l2;
            l2 = l2.next;
        }
        crr = crr.next
    }

    crr.next = l1 || l2;
    return dummyList.next;
  }
  

  const Divide = (start,end) =>{
    if(start > end) return null;
    if(start === end) return lists[start];

    let mid = start + Math.floor((end - start) / 2);
    let l1 = Divide(start, mid);
    let l2 = Divide(mid + 1, end);

    return MergeKList(l1,l2);
  }

   return Divide(0, lists.length - 1);
};