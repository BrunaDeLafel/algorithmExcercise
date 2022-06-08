/**
 * @description 前序遍历二叉树
 * @param root
 */
const preOrderTraversal = (root) => {
    let tempArr = [];
    const preorderMeta = (branch) => {
        tempArr.push(branch.val);
        if(branch.left){
            preorderMeta(branch.left)
        }
        if(branch.right){
            preorderMeta(branch.right);
        }
    }
    if(root){
        preorderMeta(root);
    }
    return tempArr;
}