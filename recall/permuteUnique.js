/**
 * @description 全排列2 permuteUnique
 * @param nums
 */
const permuteUnique = (nums) => {
    let resultArr = [];
    let stringArr = [];
    let indexSet = new Set();
    nums = nums.sort((a, b) => a - b);

    const helper = (startIndex, path, indexSet) => {
        path.push(nums[startIndex]);
        indexSet.add(startIndex);
        if(path.length === nums.length && !stringArr.includes(JSON.stringify(path))){
            stringArr.push(JSON.stringify(path.slice()))
            resultArr.push(path.slice());
        }
        for(let i = 0;i < nums.length;i ++){
            if(!indexSet.has(i)){
                helper(i, path, indexSet);
            }
        }
        path.pop();
        indexSet.delete(startIndex);
    }

    for(let i = 0;i < nums.length;i ++){
        helper(i, [], indexSet);
    }

    return resultArr;
}