/**
 * @description 二叉树的最近公共祖先 ancestor
 * @param root
 * @param p
 * @param q
 */
const lowestCommonAncestor = (root, p, q) => {
    if(root === null || root === p || root === q){
        return root;
    }
    let l = lowestCommonAncestor(root.left, p, q);
    let r = lowestCommonAncestor(root.right, p, q);
    if(l === null){
        return r
    };
    if(r === null){
        return l;
    }
    return root;
}