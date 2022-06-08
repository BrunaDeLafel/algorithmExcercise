/**
 * @description 全排列 回溯
 * @param nums
 * @returns {*[]}
 */
const permute = (nums) => {
    let resultArr = [];
    // 递归，回朔
    const helper = (startIndex, path) => {
        if(path.length === nums.length){
            resultArr.push(path.slice())
        }

        for(let i = startIndex;i < nums.length;i ++){
            if(!path.includes(nums[i])){
                path.push(nums[i]);
                helper(startIndex, path);
                path.pop();
            }
        }
    }

    helper(0, []);
    return resultArr;
}