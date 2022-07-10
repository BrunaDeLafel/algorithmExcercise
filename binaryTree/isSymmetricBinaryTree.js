/**
 * @description 是否是对称二叉树 symmetric binary tree
 * @param root
 */
const isSymmetricBinaryTree = (root) => {
    // BFS广度优先
    if(root === null){
        return true
    }
    let queue = [];
    queue.push(root.left, root.right);

    while(queue.length){
        let t1 = queue.shift();
        let t2 = queue.shift();

        if(!t1 && !t2){
            continue
        }
        if(!t1 || !t2){
            return false;
        }
        if(t1.val !== t2.val){
            return false
        }

        queue.push(t1.left, t2.right, t1.right, t2.left);
    }

    return true;
}