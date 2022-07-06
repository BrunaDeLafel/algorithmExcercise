/**
 * @description 数组的最大子序列之和
 * @param nums
 * @returns {*}
 */
const maxSubArray = function(nums) {
    /**
     * 状态转移方程：f(i) = max{ f(i - 1) + nums[i], nums[i] }
     */
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};