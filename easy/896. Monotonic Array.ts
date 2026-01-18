// NEED REVISIT.
// NEED TO MAINTAIN 2 variables TO TRACK THE ORDER
function isMonotonic(nums: number[]): boolean {
    const stack = [];
    let isIncreasing = false;
    let isDecreasing = false;
    for (let i = 0; i <= nums.length-1; i++) {
        if (stack.length > 0) {
            // used i here since I assumed i-1 is always the top of the stack
            const curr = nums[i] - stack[i-1];
            if (curr !== 0) {
                if (curr > 0) isIncreasing = true;
                if (curr < 0) isDecreasing = true;
            }
            if (isIncreasing && isDecreasing) {
                return false;
            }
        }
        stack.push(nums[i]);
    }
    return true;
};

// Better answer by:
// 1. Using 1 integer to keep track of the order instead of two boolean
// 2. remove the stack initialization
function isMonotonic(nums: number[]): boolean {
    let order = 0; // 0 is unknown, 1 is increasing, -1 is decreasing
    for (let i = 0; i < nums.length-1; i++) {
        const diff = nums[i+1] - nums[i];
        if (diff === 0) continue;
        const curOrder = diff > 0 ? 1 : -1;
        if (order === 0) order = curOrder
        else if (order !== curOrder) return false;
    }
    return true;
};
