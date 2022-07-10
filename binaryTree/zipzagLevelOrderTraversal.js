/**
 * @description 锯齿状二叉树层序遍历
 * @param root
 * @returns {*[]}
 */
const zigzagLevelOrder = function(root) {
    let resultArr = [];
    let currentDirection = 'right';
    let currentRank = root === null ? [] : [root];

    while(true){
        let tempArr = [];
        let subResultArr = []
        for(let i = 0;i < currentRank.length;i ++){
            subResultArr.push(currentRank[i].val);
            if(currentDirection === 'left'){
                if(currentRank[i].left){
                    tempArr.push(currentRank[i].left);
                }
                if(currentRank[i].right){
                    tempArr.push(currentRank[i].right);
                }
            } else {
                if(currentRank[i].right){
                    tempArr.push(currentRank[i].right);
                }
                if(currentRank[i].left){
                    tempArr.push(currentRank[i].left);
                }
            }
        }
        // 翻转
        currentRank = tempArr.reverse();
        subResultArr.length === 0 ? null : resultArr.push(subResultArr.reverse());
        if(tempArr.length === 0){
            break;
        }
        currentDirection === 'left' ? currentDirection = 'right' : currentDirection = 'left';
    }

    return resultArr;
};