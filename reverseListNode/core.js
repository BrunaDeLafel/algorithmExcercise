/**
 * @description 通过迭代修改指针引用，反转链表
 * @param head
 */
const reverseListNode = (head) => {
    let prev = null;
    let curr = head;
    while(curr){
        // 缓存下一个节点
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }

    return prev;
}