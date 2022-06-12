/**
 * @description 版本号的比较
 * @param version1
 * @param version2
 * @returns {number}
 */
const versionCompare = (version1, version2) => {
    let version1Arr = version1.split('.');
    let version2Arr = version2.split('.');

    for(let i = 0;i < Math.max(version1Arr.length, version2Arr.length);i ++){
        // version1的版本长度大于version2的版本长度
        if(version1Arr[i] && version2Arr[i] === undefined){
            for(let j = i;j < version1Arr.length;j ++){
                if(parseInt(version1Arr[j]) !== 0){
                    return 1
                }
            }
            return 0;
        }
        // version2的版本长度大于version1的版本长度
        if(version2Arr[i] && version1Arr[i] === undefined){
            for(let j = i;j < version2Arr.length;j ++){
                if(parseInt(version2Arr[j]) !== 0){
                    return -1
                }
            }
            return 0;
        }
        // 当前比较到的版本长度相同时
        if(parseInt(version2Arr[i]) > parseInt(version1Arr[i])){
            return -1;
        } else if(parseInt(version2Arr[i]) < parseInt(version1Arr[i])){
            return 1;
        }
    }

    return 0;
}