/**
 * @description 最长递增子序列的个数
 * @param nums
 */
const findNumOfLIS1 = (nums) => {
    // 动态规划
}

const findNumOfLIS1 = (nums) => {
    // 暴力回溯
    let maxLen = 0;
    let count = 0
    let resultArr = [];

    const helper = (startIndex, path) => {
        for(let i = startIndex + 1;i < nums.length;i ++){
            if(path.length && (path[path.length - 1] < nums[i])){
                path.push(nums[i]);
                helper(i, path);
                path.pop();
            }
        }

        if(path.length >= maxLen){
            maxLen = Math.max(path.length, maxLen);
            resultArr.push(path.slice());
        }
    }

    for(let i = 0;i < nums.length;i ++){
        helper(i, [nums[i]]);
    }
    resultArr.forEach(arr => {
        if(arr.length === maxLen){
            count ++;
        }
    })
    return count;
}