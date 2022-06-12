/**
 * @description 后序遍历二叉树 left - right - val
 * @param root
 */
const postOrderTraversal = (root) => {
    let tempArr = [];
    const postorderMeta = (branch) => {
        if(branch.left){
            preorderMeta(branch.left)
        }
        if(branch.right){
            preorderMeta(branch.right);
        }
        tempArr.push(branch.val);
    }
    if(root){
        postorderMeta(root);
    }
    return tempArr;
}