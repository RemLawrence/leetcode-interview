// Array #1 - frequency array
function findErrorNums(nums: number[]): number[] {
    const n = nums.length;
    const freq = new Array<number>(n+1).fill(0);

    // Fill in occurence
    for (const num of nums) {
        freq[num]++;
    }

    const result = [0, 0];
    // freq[0] doesn't count
    for (let i = 1; i <= n; i++) {
        if (freq[i] == 0) result[1] = i;
        if (freq[i] > 1) result[0] = i;
    }
    return result;
};
