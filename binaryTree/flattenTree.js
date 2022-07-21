/**
 * @description 拍平二叉树 转换为 单链表
 * @param root
 */
const flattenTree = (root) => {
    if (root === null) {
        return;
    }
    let list = [];

    const preOrderTraversal = (branch) => {
        list.push(branch);
        if (branch.left) {
            preOrderTraversal(branch.left)
        }
        if (branch.right) {
            preOrderTraversal(branch.right);
        }
    }

    preOrderTraversal(root);

    list.shift();
    let slow = root;
    list.forEach((curr) => {
        slow.right = curr;
        slow.left = null;
        slow = slow.right;
    });
}