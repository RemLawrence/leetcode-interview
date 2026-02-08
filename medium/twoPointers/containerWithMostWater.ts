function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        const x = right - left;
        const cur = x * Math.min(height[left], height[right]);
        if (max < cur) max = cur;
        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return max;
};
