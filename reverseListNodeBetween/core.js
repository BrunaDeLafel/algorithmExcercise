/**
 * @description 在left和right之间反转链表
 * @param head
 * @param left
 * @param right
 * @returns {*|null}
 */
const reverseListNodeBetween = (head, left, right) => {
    let currBase = head;
    let currHead = null;
    let prev = null;

    let tempIndex = 1
    // 开始遍历整个链表
    while(currBase){
        if(currBase.next && tempIndex + 1 === left){
            currHead = currBase;
        }
        if(tempIndex === left){
            let curr = currBase;
            let _tempIndex = tempIndex;
            while(curr){
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                if(_tempIndex === right) {
                    curr = next;
                    break;
                }
                curr = next;
                _tempIndex ++
            }
            let prevCurr = prev
            while(prevCurr.next){
                prevCurr = prevCurr.next
            }
            prevCurr.next = curr;
            if(currHead !== null){
                currHead.next = prev;
            }
            break;
        }
        currBase = currBase.next;
        tempIndex ++;
    }

    return currHead ? head : prev;
}