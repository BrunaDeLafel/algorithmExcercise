/**
 * @description 二叉树迭代器
 * @param root
 * @constructor
 */
const BSTIterator = (root) => {
    this.idx = 0;
    this.arr = [];
    this.inorderTraversal(root, this.arr);
};

BSTIterator.prototype.next = () => {
    return this.arr[this.idx++];
};

BSTIterator.prototype.hasNext = () => {
    return this.idx < this.arr.length;
};

BSTIterator.prototype.inorderTraversal = (root, arr) => {
    if (!root) {
        return;
    }
    this.inorderTraversal(root.left, arr);
    arr.push(root.val);
    this.inorderTraversal(root.right, arr);
};