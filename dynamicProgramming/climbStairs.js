/**
 * @description 爬楼梯（斐波那契数列变种）
 * @param n
 */
const climbStairs = (n) => {
    let arr = [0, 1, 2];
    // 将楼层阶梯进行拆解
    // 1. 前一级的台阶 1步跨上来
    // 2. 前二级的台阶 2步跨上来
    for(let i = 3;i <= n;i ++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}