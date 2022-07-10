/**
 * @description 二叉树的层序遍历 level order
 * @param root
 */
const levelOrderTraversal = (root) => {
    if(root === null){
        return []
    }
    let resultArr = [[root.val]];
    // 设置队列 queue
    let queue = [];
    queue.push(root.left, root.right);

    while(queue.length){
        let tempArr = []
        let nextQueue = [];

        queue.forEach(t => {
            if(t){
                tempArr.push(t.val);
                t.left ? nextQueue.push(t.left) : null;
                t.right ? nextQueue.push(t.right) : null;
            }
        });

        // 更新下一次层序的队列queue
        queue = nextQueue;

        if(tempArr.length){
            resultArr.push(tempArr);
        }
    }

    return resultArr;
};