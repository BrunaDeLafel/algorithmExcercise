/**
 * @description 反转二叉树 invert Binary Tree
 * @param root
 * @returns {null|*}
 */
const invertBinaryTree = (root) => {
    if(!root){
        return null;
    }
    invertBranch(root);
    return root
}

const invertBranch = (branch) => {
    if(!branch.left && !branch.right){
        return;
    } else {
        let tempBranch = branch.left;
        branch.left = branch.right;
        branch.right = tempBranch;

        if(branch.left){
            invertBranch(branch.left)
        }
        if(branch.right){
            invertBranch(branch.right)
        }
    }
}