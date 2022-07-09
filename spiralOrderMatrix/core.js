/**
 * @description 螺旋矩形算法
 * @param matrix
 * @returns {*[]}
 */
const spiralOrderMatrix = (matrix) => {
    let resultArr = [];
    let positionMap = new Map();
    let lastRank = 0,
        lastIndex = -1;
    let spiralDirection = 'right';
    let matrixLength = matrix[0].length * matrix.length;

    initMapHelper(positionMap, matrix);

    while(true){
        if(matrixLength === resultArr.length){
            break;
        }
        if(spiralDirection === 'right'){
            for(let i = lastIndex + 1;i < matrix[lastRank].length;i ++){
                let num = matrix[lastRank][i]
                if(!positionMap.get(lastRank).includes(i)){
                    resultArr.push(num);
                    lastIndex = i;
                    mapHelper(positionMap, lastRank, i);
                }
            }
            spiralDirection = 'bottom';
            lastRank = lastRank + 1;
        } else if(spiralDirection === 'bottom') {
            for (let i = lastRank; i < matrix.length; i++) {
                let numSet = matrix[i]
                if (!positionMap.get(i).includes(lastIndex)) {
                    resultArr.push(numSet[lastIndex]);
                    lastRank = i;
                    mapHelper(positionMap, i, lastIndex);
                }
            }
            spiralDirection = 'left';
        } else if(spiralDirection === 'left'){
            for(let i = lastIndex - 1;i >= 0;i --){
                let num = matrix[lastRank][i]
                if(!positionMap.get(lastRank).includes(i)){
                    resultArr.push(num);
                    lastIndex = i;
                    mapHelper(positionMap, lastRank, i);
                }
            }
            spiralDirection = 'top';
            lastRank = lastRank - 1;
        } else if(spiralDirection === 'top'){
            for(let i = lastRank;i >= 0;i --){
                let numSet = matrix[i];
                if(!positionMap.get(i).includes(lastIndex)){
                    resultArr.push(numSet[lastIndex]);
                    lastRank = i;
                    mapHelper(positionMap, i, lastIndex);
                }
            }
            spiralDirection = 'right';
        }
    }

    return resultArr;
}

const initMapHelper = (map, matrix) => {
    for(let i = 0;i < matrix.length;i ++){
        map.set(i, []);
    }
}

const mapHelper = (map, key, value) => {
    let tempArr = map.get(key);
    tempArr.push(value);
    map.set(key, tempArr);
}

const testMatrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrderMatrix(testMatrix));