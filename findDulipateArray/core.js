/**
 * @description 找到节点重复的元素 OlogN解法，floyed cycle
 * @param arr
 * @returns {*}
 */
const findDulipdateArray = (arr) => {
    let slow = 0;
    let fast = 0;

    while(true){
        slow = arr[slow];
        fast = arr[arr[fast]];
        if(slow === fast){
            let _slow = 0;
            while(arr[_slow] !== arr[slow]){
                _slow = arr[_slow];
                slow = arr[slow];
            }
            return arr[_slow];
        }
    }
}