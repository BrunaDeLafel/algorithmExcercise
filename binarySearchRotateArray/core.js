/**
 * @description 搜索旋转排序数组
 * @param nums
 * @param target
 */
const binarySearchRotateArray = (nums, target) => {
    if(!nums.length){
        return -1;
    }
    const helper = (left, right) => {
        if(nums[left] === target){
            return left
        }
        if(nums[right] === target){
            return right
        }
        if(left === right || right === left + 1){
            return -1;
        }
        // 开始进行二分查找 binary search
        let mid = Math.floor((left + right + 1) / 2);
        if(nums[mid] === target){
            return mid;
        }
        /**
         * 1. mid 右边升序列 target 右边升序列
         *   1.1
         *   1.2
         * 2. mid 左边升序列 target 左边升序列
         *   2.1
         *   2.2
         * 3. mid 左边升序列 target 右边升序列
         * 4. mid 右边升序列 target 左边升序列
         */
        if(nums[mid] <= nums[right] && target <= nums[right]){
            return nums[mid] > target ? helper(left, mid) : helper(mid, right);
        } else if(nums[mid] >= nums[left] && target >= nums[left]){
            return nums[mid] > target ? helper(left, mid) : helper(mid, right);
        } else if(nums[mid] >= nums[left] && target <= nums[right]){
            return helper(mid, right);
        } else if(nums[mid] <= nums[right] && target >= nums[left]){
            return helper(left, mid);
        } else {
            return -1
        }
    }

    return helper(0, nums.length - 1);
}