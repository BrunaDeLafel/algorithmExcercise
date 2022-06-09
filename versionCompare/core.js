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
        if(version1Arr[i] && version2Arr[i] === undefined){
            for(let j = i;j < version1Arr.length;j ++){
                if(parseInt(version1Arr[j]) !== 0){
                    return 1
                }
            }
            return 0;
        }
        if(version2Arr[i] && version1Arr[i] === undefined){
            for(let j = i;j < version2Arr.length;j ++){
                if(parseInt(version2Arr[j]) !== 0){
                    return -1
                }
            }
            return 0;
        }
        if(parseInt(version2Arr[i]) > parseInt(version1Arr[i])){
            return -1;
        } else if(parseInt(version2Arr[i]) < parseInt(version1Arr[i])){
            return 1;
        }
    }

    return 0;
}