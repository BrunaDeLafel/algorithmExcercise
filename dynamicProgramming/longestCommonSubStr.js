/**
 * @description 两个字符串的最长公共子序列
 * @param text1
 * @param text2
 */
const longestCommonSubStr = (text1, text2) => {
    /**
     * 状态转移方程
     * 1. 当text1[i - 1] === text2[j - 1]时，说明两个字符串的最后一位字符相等，所以最长子序列又增加 1
     *    d[i][j] = d[i - 1][j - 1] + 1
     * 2. 当text1[i - 1] !== text2[j - 1]时，说明两个字符串的最后一位字符不相等，所以最长子序列需要去比较
     *    d[i][j] = Math.max(d[i - 1][j], d[i][j - 1])
     */
    const m = text1.length;
    const n = text2.length;

    const dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));

    for(let i = 1;i <= m;i ++){
        let c1 = text1[i - 1];
        for(let j = 1;j <= n;j ++){
            let c2 = text2[j - 1];

            if(c1 === c2){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n];
}