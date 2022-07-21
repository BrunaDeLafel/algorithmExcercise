/**
 * @description 平衡二叉树
 * @param root
 */
const balancedBinaryTree = (root) => {
    if(root === null){
        return true
    }
    let result = true;
    const helper = (branch, rank) => {
        let rankR = rank,
            rankL = rank;
        if(branch.left){
            rankL = helper(branch.left, rank + 1);
        }
        if(branch.right){
            rankR = helper(branch.right, rank + 1);
        }

        if((rankL - rankR) > 1 || ((rankR - rankL) > 1)){
            result = false;
        }

        return Math.max(rankR, rankL);
    }

    helper(root, 0);

    return result;
}