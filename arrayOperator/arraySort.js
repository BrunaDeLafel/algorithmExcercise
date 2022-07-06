/**
 * @description 数组的排列sort
 * @param arr
 */
const arraySort = (arr) => {
    // 降序排列
    arr.sort((a, b) => {
        return a - b;
    });

    // 升序排列
    arr.sort((a, b) => {
        return b - a;
    })

    // 字母序排列
    arr.sort();
}