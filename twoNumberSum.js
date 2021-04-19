// O(n) time | O(n) space
function twoNumberSum(array, target) {
    let nums = {};
    for (const element of array){
        //console.log(element)
        match = target - element
        
        if(match in nums){
            //console.log(match, element)
            return [match, element]
        } else {
            nums[element] = true
            //console.log(nums)
        }
    }
    return [];
}

// O(nlog(n)) time | O(1) space
const twoNumberSum2 = (array, target) => {
    nums = array.sort()
    min = 0
    max = nums.length -1
    while(min < max){
        const currentSum = array[min] + array[max];
        if(currentSum === target){
            return [array[min], array[max]]
        } else if(currentSum < target){
            min++
        } else if(currentSum > target){
            max--
        }
    }
    return []

}
nums = [1,3,7,9,2]
res = twoNumberSum2(nums,11)
console.log(res)