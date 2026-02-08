function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const contemplement = target - currentNumber;

        const resultIdx = hashMap.get(contemplement);
        if (hashMap.has(contemplement)) {
            return [resultIdx, i]
        }

        hashMap.set(currentNumber, i);
    }
    return [];
};
