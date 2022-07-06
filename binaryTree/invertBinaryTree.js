/**
 * @description 反转二叉树 invert Binary Tree
 * @param root
 * @returns {null|*}
 */
const invertBinaryTree = (root) => {
    if(!root){
        return null;
    }
    searchBranch(root);
    return root
}

const searchBranch = (branch) => {
    if(!branch.left && !branch.right){
        return;
    } else {
        let tempBranch = branch.left;
        branch.left = branch.right;
        branch.right = tempBranch;

        if(branch.left){
            searchBranch(branch.left)
        }
        if(branch.right){
            searchBranch(branch.right)
        }
    }
}