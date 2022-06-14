/**
 * @description 确定当前数组是否有重复数据
 * @param arr
 * @returns {boolean}
 */
const arrayNReapt = (arr) => {
    let newArr = arr.reduce((pre, cur, index, arr1) => {
        if (!pre.includes(cur)) {
            return pre.concat(cur);
        } else {
            return pre;
        }
    }, []);

    return newArr;
}

console.log(arrayNReapt([1,2,3,1]));