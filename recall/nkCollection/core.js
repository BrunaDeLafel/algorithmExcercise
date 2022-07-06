/**
 * 一组长度为n的字符集合，遍历出长度为k的子字符串
 * @param n
 * @param k
 * @returns {*[]}
 */
const combine = (n, k) => {
    let resultArr = [];
    // 回溯 递归
    const helper = (startIndex, path) => {
        if(path.length === k){
            resultArr.push(path.slice());
            return;
        }

        for(let i = startIndex;i <= n - (k - path.length) + 1;i ++){
            path.push(i)
            helper(i + 1, path);
            path.pop();
        }
    }

    helper(1, []);

    return resultArr;
}