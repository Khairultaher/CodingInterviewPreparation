// Find kth largest element - Quickselect
const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

const swap = function (array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const getPartition = function (nums, left, right) {
    let i = left;

    for (let j = left; j <= right; j++) {
        if (nums[j] <= nums[right]) {
            swap(nums, i, j);
            i++;
        }
    }
    return i - 1;
};

const quickSelect = function (nums, left, right, indexToFind) {
    const partitionIndex = getPartition(nums, left, right);
    // 5, 3, 1, 6, 4, 2
    if (partitionIndex === indexToFind) {
        return nums[partitionIndex];
    } else if (indexToFind < partitionIndex) {
        return quickSelect(nums, left, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(nums, partitionIndex + 1, right, indexToFind);
    }
};

var findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k;

    return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

console.log(findKthLargest(array, kToFind))