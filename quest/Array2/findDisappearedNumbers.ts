// Array #2 - HashMap frequency counting
function findDisappearedNumbers(nums: number[]): number[] {
    const result = Array(nums.length + 1).fill(0);
    for (const num of nums) {
        result[num]++;
    }

    const resultingArray = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (result[i] === 0) {
            resultingArray.push(i);
        }
    }
    return resultingArray;
};
