/**
 * @description 二叉树的最小路径
 * @param root
 * @returns {number}
 */
const minDepth = (root) => {
    if(root === null){
        return 0;
    }
    let pathDepth = [];

    const helper = (branch, step) => {
        step ++;
        if(branch.left){
            helper(branch.left, step);
        }

        if(branch.right){
            helper(branch.right, step);
        }

        if(!branch.left && !branch.right){
            pathDepth.push(step);
        }
    }

    helper(root, 0);

    return Math.min(...pathDepth);
}