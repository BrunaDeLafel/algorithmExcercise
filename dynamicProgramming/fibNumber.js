/**
 * @description 斐波那契数列
 * @param n
 * @returns {number|*}
 * @constructor
 */
const FibNumber1 = (n) => {
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }

    return FibNumber1(n - 1) + FibNumber1(n - 2);
}
const FibNumber2 = (n) => {
    if(n < 2){
        return n
    }
    let p = 0;
    let q = 0;
    let r = 1;
    for(let i = 2;i < n;i ++){
        p = q;
        q = r;
        r = p + q;
    }

    return r;
}