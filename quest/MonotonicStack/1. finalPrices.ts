// I think brute force is easier here but the question requires monotonic stack
function finalPrices(prices: number[]): number[] {
    const result = Array(prices.length).fill(0);
    const stack = [];

    for (let i = prices.length - 1; i >=0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    result[i] = stack.length > 0 ? prices[i] - stack[stack.length-1] : prices[i];

        stack.push(prices[i]);
    }
    return result;
};
