/**
 * @description 链表取得交集（intersection）
 * @param headA
 * @param headB
 * @returns {string|null}
 */
const getIntersectionListNode = (headA, headB) => {
    let fast = headA;
    let slow = headB
    if(headA === null && headB === null){
        return null
    }
    while(fast !== slow){
        fast = fast === null ? headA : fast.next;
        slow = slow === null ? headB : slow.next;
    }

    return `intersection ${fast.val}`;
}