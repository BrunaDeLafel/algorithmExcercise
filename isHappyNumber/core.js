/**
 * @description 是否是快乐数
 * @param num
 */
const isHappyNumber = (num) => {
    let tempResult = n;
    let numSet = new Set();

    while(tempResult !== 1){
        if(!numSet.has(tempResult)){
            numSet.add(tempResult);
        } else {
            return false
        }

        let nArr = String(tempResult).split('');
        tempResult = 0;
        nArr.forEach(item => {
            tempResult += Math.pow(parseInt(item), 2);
        });

        if(tempResult === 1){
            return true;
        }
    }

    return true;
}