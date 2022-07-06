/**
 * @description array 数组打平
 * @param arr
 * @returns {*}
 */
const arrayFlat = (arr) => {
    let newArr = arr.reduce((pre, curr) => {
        return pre.concat(Array.isArray(curr) ? arrayFlat(curr) : curr);
    }, []);

    return newArr;
}