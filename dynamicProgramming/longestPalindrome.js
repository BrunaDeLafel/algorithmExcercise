/**
 * @description 最长回文字符串（使用中心扩散法）
 * @param s
 * @returns {*}
 */
const longestPalindrome = (s) => {
    // 处理特殊情况
    if(s.length < 1){
        return s;
    }
    let start = 0;
    let end = 0;

    let sArr = s.split('');
    for(let i = 0;i < s.length;i ++){
        let len1 = expandCenter(sArr, i, i);
        let len2 = expandCenter(sArr, i, i + 1);
        let len = Math.max(len1, len2);
        if(len > end - start){
            start = Math.ceil(i - (len - 1) / 2); // 往前进一位
            end = Math.floor(i + len / 2); // 往后退一位
        }
    }
    return sArr.slice(start, end + 1).join('');
}
// 中心扩散法 核心
const expandCenter = (arr, l, r) => {
    let left = l;
    let right = r;

    while(left >= 0 && right <= (arr.length - 1) && arr[left] === arr[right]){
        left --;
        right ++;
    }

    return right - left - 1;
}