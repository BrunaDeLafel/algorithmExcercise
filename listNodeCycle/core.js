/**
 * @description floyed环形算法，通过快慢指针计算出
 * @param head
 */
const listNodeHasCycle = (head) => {
    let fast = head;
    let slow = head;

    while(fast){
        fast = fast.next;
        slow = slow.next;
        if(fast === null){
            return false
        }

        fast = fast.next;
        if(fast === slow){
            return true;
        }
    }

    return false;
}