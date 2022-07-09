/**
 * @description 二叉树的最深路径
 * @param root
 */
const maxDepthB = (root) => {
    if(root === null){
        return 0;
    }

    return Math.max(maxDepthB(root.left), maxDepthB(root.right)) + 1;
}

/**
 * @description N叉树的最深路径
 * @param root
 */
const maxDepthN = (root) => {
    if(root === null){
        return 0
    }

    let maxDepth = 0;
    root.children.forEach(child => {
        let path = maxDepth(child);
        maxDepth = Math.max(maxDepth, path);
    });

    return 1 + maxDepth;
}