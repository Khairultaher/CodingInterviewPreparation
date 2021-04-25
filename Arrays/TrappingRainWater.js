// Tapping Rain Water (Hard Problem)
const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

//
const getTrappedRainwater = function (heights) {
    let totalWater = 0;

    for (let p = 0; p < heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - heights[p];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}

//
const getTrappedRainwater2 = function (heights) {

    let left = 0, right = heights.length - 1;
    let totalWater = 0, maxLeft = 0, maxRight = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left]
            } else {
                totalWater += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                totalWater += maxRight - heights[right];
            }

            right--;
        }
    }

    return totalWater;

}

console.log(getTrappedRainwaterw(elevationArray));

