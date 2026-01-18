// Came up this O(n+m) after getting hints from AI
// Basically compute a lookup hashmap with one go using Monotonic Stack when iterating nums2, then num1 can just look it up
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack: number[] = [];
    const map = new Map<number, number>();
    for (let i = nums2.length-1; i>=0; i--) {
        while (stack.length > 0 && stack[stack.length-1] <= nums2[i]) {
            stack.pop();
        }
        map[nums2[i]] = stack.length === 0 ? -1 : stack[stack.length-1];

        stack.push(nums2[i]);
    }

    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map[nums1[i]];
    }
    return result;
};

// My first attempt, which was (I think) a brute force
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result = Array(nums1.length).fill(-1);
    let stack = [];
    for (let i=nums2.length-1; i>=0; i--){
        stack.push(nums2[i]);
    }
    for (let i =0; i< nums1.length; i++) {
        const stackCopy = [...stack];
        while (nums1[i] !== stackCopy[stackCopy.length-1]) {
            stackCopy.pop();
        }
        stackCopy.pop();
        while (stackCopy.length !== 0 && nums1[i] > stackCopy[stackCopy.length-1]) {
            stackCopy.pop();
        }
        if (stackCopy.length > 0) result[i] = stackCopy[stackCopy.length-1]
    }
    return result;
};
