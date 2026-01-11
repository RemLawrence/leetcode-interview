// Array #2 - HashMap frequency counting
function smallerNumbersThanCurrent(nums: number[]): number[] {
    // Transform
    const numsMap = nums.map((value, index) => ({value, index}));

    // Sort
    numsMap.sort((a, b) => a.value - b.value);

    // Prepare the result array
    const result = Array(nums.length);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // numsMap[i].index // original index
        // i // current index
        // result[i] // result to fill in
        if (i > 0 && numsMap[i].value !== numsMap[i-1].value) {
            count = i;
        }
        result[numsMap[i].index] = count;
    }
    return result;
};
