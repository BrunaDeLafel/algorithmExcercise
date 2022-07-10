/**
 * @description 重排链表 reorder listNode
 * @param head
 */
const reorderListNode = (head) => {
    let queue = [];
    let curr = head;
    while(curr){
        queue.push(curr);
        curr = curr.next;
    };

    while(queue.length){
        let prev = queue.shift();
        let tail = queue.pop();
        /**
         * 1. 不为最后处理两个或一个指针
         * 2. 为最后处理两个或一个指针
         */
        if(queue.length){
            tail.next = prev.next;
            prev.next = tail;
        } else {
            /**
             * 1. 最后两个指针
             * 2. 最后一个指针
             */
            if(tail){
                tail.next = null;
                prev.next = tail;
            } else {
                prev.next = null;
            }
        }
    }
}