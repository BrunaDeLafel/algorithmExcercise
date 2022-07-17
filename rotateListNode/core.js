/**
 * @description 向右旋转K次链表
 * @param head
 * @param k
 */
const rotateListNode = (head, k) => {
    // 旋转的特殊情况，直接返回链表
    if(head === null || head.next === null || k === 0){
        return head;
    }
    /**
     * 1. 创建指针队列queue
     * 2. 创建哑链表 承接被切断的剩余部分
     */
    let queue = [];
    let p = head;
    let dummyHead = new ListNode();

    while(p){
        queue.push(p);
        p = p.next
    }

    if(k >= queue.length){
        if(k % queue.length === 0){
            return head;
        }
        k = (k % queue.length);
    }
    dummyHead = queue[queue.length - k];
    queue[queue.length - 1 - k].next = null;

    // 创建哑链表的慢指针 slow
    let slow = dummyHead;
    while(slow.next){
        slow = slow.next;
    }

    slow.next = queue[0];

    return dummyHead;
}