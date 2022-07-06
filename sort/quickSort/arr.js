/**
 * @description 快速排序第k大的数
 * @param nums
 * @param k
 */
const quickSort = (nums, k) => {
    const n = nums.length;

    const quick = (l, r) => {
        if (l > r) {
            return;
        }
        let random = Math.floor(Math.random() * (r - l + 1)) + l;
        swap(nums, random, r);

        // 对基准元素进行partition分割
        let pivotIndex = partition(nums, l, r);
        if (n - k < pivotIndex) {
            quick(1, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r);
        };
    }

    quick(0, n - 1);
    return nums[n - k];
}

const partition = (nums, left, right) => {
    let pivot = nums[right];
    let pivotIndex = left;
    for(let i = left;i < right;i ++){
        if(nums[i] < pivot){
            swap(nums, i, pivotIndex);
            pivotIndex ++;
        }
    }
    swap(nums, right, pivotIndex);
    return pivotIndex;
}

const swap = (nums, p, q) => {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}