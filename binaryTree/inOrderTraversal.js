/**
 * @description 中序遍历二叉树 left - val - right
 * @param root
 */
const inOrderTraversal = (root) => {
    let tempArr = [];
    const inOrderMeta = (branch) => {
        if(branch.left) {
            inOrderMeta(branch.left);
        }
        tempArr.push(branch.val);
        if(branch.right) {
            inOrderMeta(branch.right);
        }
    }
    if(root){
        inOrderMeta(root);
    } else {
        return [];
    }
    return tempArr;
}