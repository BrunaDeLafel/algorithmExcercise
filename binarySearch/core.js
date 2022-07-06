/**
 * @description 数组的二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target) => {
    let resultIndex = -1;
    const helper = (start, end) => {
        if(nums[start] === target){
            resultIndex =  start;
            return;
        }
        if(nums[end] === target) {
            resultIndex =  end;
            return;
        }
        let mid = start + ((end - start + 1) / 2 | 0);
        if(end - start <= 1 && nums[end] !== target && nums[start] !== target) {
            resultIndex =  -1;
            return;
        }
        (nums[mid] < target) ? helper(mid, end) : helper(start, mid)
    }

    helper(0, nums.length - 1);

    return resultIndex;
};

/**
 * @description 二分数组查找（另一种方法）
 * @param nums
 * @param target
 * @returns {number}
 */
const binarySearch1 = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) / 2 | 0;
        let num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}