/**
 * @description 找出二叉树中第K个最小的元素
 * @param root
 * @param k
 */
const kthSmallest = (root, k) => {
    let tempArr = [];
    searchTreeNode(root, tempArr);

    for(let i = 0;i < k;i ++){
        let min = Math.min(...tempArr);
        tempArr.splice(tempArr.indexOf(min), 1);
        if(i === k - 1){
            return min;
        }
    }
};

searchTreeNode = (branch, tempArr) => {
    tempArr.push(branch.val);
    if(branch.left){
        searchTreeNode(branch.left, tempArr);
    }
    if(branch.right){
        searchTreeNode(branch.right, tempArr);
    }
}
