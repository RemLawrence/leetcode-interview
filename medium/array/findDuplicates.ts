// Array #3 - in-place marking
// We only care about the index (from value - 1) here, just using the values in array as bridge
function findDuplicates(nums: number[]): number[] {
    const result = [];
    for (const num of nums) {
        const idx = Math.abs(num) - 1;
        if (nums[idx] < 0) {
            // Already negated, this represents the second presence
            result.push(idx + 1);
        } else {
            // First presence, negate the number
            nums[idx] = -nums[idx];
        }
    }

    return result;
};
