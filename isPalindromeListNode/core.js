/**
 * @description 是否是回文链表
 * @param head
 */
const isPalindromeListNode = (head) => {
    let p = head;

    let queue = [];
    while(p){
        queue.push(p);
        p = p.next;
    }

    while(queue.length){
        let prev = queue.shift();
        let tail = queue.pop();

        if(tail && prev.val !== tail.val){
            return false;
        }
    }

    return true;
}