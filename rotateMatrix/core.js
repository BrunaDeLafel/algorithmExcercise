/**
 * @description 翻转矩形
 * @param matrix
 * @returns {*}
 */
const rotateMatrix = (matrix) => {
    let metaArr = new Array(matrix[0].length).fill(0);
    let start = matrix.length - 1;
    for(let i = 0;i < metaArr.length;i ++){
        // 一定要slice，否则数组引用的地址一致
        matrix.push(metaArr.slice());
    }
    for(let j = 0;j < metaArr.length;j ++){
        let i = start;
        for(let j1 = 0;j1 < metaArr.length;j1 ++){
            if(i >= 0){
                matrix[start + 1 + j][j1] = matrix[i][j];
                i --;
            }
        }
    }

    return matrix.splice(0, metaArr.length);
};