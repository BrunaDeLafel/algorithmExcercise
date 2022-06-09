/**
 * @description 最长递增子序列(Olog(N))
 * @param nums
 */
const mexLenofLIS1 = (nums) => {
    // 暴力回溯法
    let maxLen = 0;

    const helper = (startIndex, path) => {
        for(let i = startIndex;i < nums.length;i ++){
            if((path.length > 0 && nums[i] > path[path.length - 1]) || path.length === 0){
                path.push(nums[i]);
                helper(i + 1, path);
                maxLen = Math.max(maxLen, path.length);
                path.pop();
            }
        }
    }

    helper(0, []);
    return maxLen;
}

const maxLenofLIS2 = (nums) => {
    // 动态规划 + 二分查找
    let ans = [];
    for(let i = 0;i < nums.length;i ++){
        let left = 0;
        let right = ans.length;

        while(left < right){
            let mid = (left + right) >> 1;
            if(ans[mid] > nums[i]){
                left = mid + 1
            } else {
                right = mid;
            }
        }

        if(right >= ans.length){
            ans.push(nums[i]);
        } else {
            ans[right] = nums[i];
        }
    }

    return ans.length;
}