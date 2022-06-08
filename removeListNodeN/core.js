/**
 * @description 删除倒数第N个链表
 * @param head
 * @param n
 * @returns {null|*}
 */
const removeNthFromEnd = (head, n) => {
    let fast = head;
    for(let i = 0;i < n - 1;i ++){
        fast = fast.next
    }

    let slow = head;
    let temp = null;
    while (fast){
        fast = fast.next;
        temp = slow;
        slow = slow.next;
    }

    if(slow.next === null){
        return temp;
    } else {
        temp.next = slow.next;
    }

    return head;
}