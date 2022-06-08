const mergeList = (list1, list2) => {
    if(list1 === null){
        return list2
    } else if (list2 === null){
        return list1
    } else if (list1.val < list2.val){
        list1.next = mergeList(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeList(list1, list2.next);
        return list2;
    }
}