/**
 * @description 二叉树的搜索，最终返回相关的子树
 * @param root
 * @param val
 * @returns {null}
 */
const searchBST = function(root, val) {
    let target = null;
    const searchBranch = (branch) => {
        if(branch.val === val){
            target = branch
        }
        if(branch.left){
            searchBranch(branch.left);
        }
        if(branch.right){
            searchBranch(branch.right);
        }
    }
    searchBranch(root);

    return target;
};