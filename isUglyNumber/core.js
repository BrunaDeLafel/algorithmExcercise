/**
 * @description 是否是丑数 ugly number
 * @param num
 */
const isUglyNumber = (num) => {
    const primeNumberArr = [2, 3, 5];
    let tempNum = num;

    if(tempNum <= 0){
        return false;
    }

    primeNumberArr.forEach(primeNum => {
        while(tempNum % primeNum === 0){
            tempNum = tempNum / primeNum;
        }
    });

    return tempNum === 1;
}