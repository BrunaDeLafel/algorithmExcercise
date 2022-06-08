const sortList = (head) => {
    return toSortList(head, null);
}
const mergeList = (list1, list2) => {
    let dummyHead = new ListNode(0);
    let temp1 = list1;
    let temp2 = list2;
    let temp = dummyHead;

    while(temp1 !== null && temp2 !== null){
        if(temp1.val < temp2.val){
            temp.next = temp1;
            temp1 = temp1.next
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }

        temp = temp.next;
    }

    if(temp1 === null) {
        temp.next = temp2;
    }
    if(temp2 === null){
        temp.next = temp1;
    }

    return dummyHead.next
}

const mergeList2 = (list1, list2) => {
    if(list1 === null){
        return list2
    } else if(list2 === null){
        return list1
    } else if(list1.val < list2.val){
        list1.next = mergeList2(list1.next, list2);
        return list1
    } else {
        list2.next = mergeList2((list1, list2.next));
        return list2;
    }
}

const toSortList = (head, tail) => {
    if(head === null){
        return null
    }

    if(head.next === null){
        return head;
    }

    let slow = head;
    let fast = head;

    // 慢指针走1步，快指针走2步
    while(fast !== tail){
        slow = slow.next;
        fast = fast.next;
        if(tail !== fast){
            fast = fast.next;
        }
    }

    const mid = slow;

    return mergeList(toSortList(head, mid), toSortList(mid, tail));
}

const mergeListNode = (list1, list2) => {
    const dummyListNode = new ListNode(0);
}

const toSortListNode = (head, tail) => {
    let slow = head;
    let fast = head;

    while(fast) {
        slow = slow.next;
        fast = fast.next
        if(fast !== tail){
            fast = fast.next
        }
    }

    const mid = slow;

    return mergeListNode();
}