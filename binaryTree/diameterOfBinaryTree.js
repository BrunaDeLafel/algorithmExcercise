/**
 * @description 二叉树的直径
 * @param root
 */
const diameterOfBinaryTree = (root) => {
    let result = 0;
    if(!root){
        return 0;
    }

    const maxDepth = (root) => {
        if(!root){
            return 0;
        }

        let resL = maxDepth(root.left);
        let resR = maxDepth(root.right);

        result = Math.max(result, resL + resR)

        return Math.max(resL, resR) + 1;
    }

    maxDepth(root);

    return result;
}