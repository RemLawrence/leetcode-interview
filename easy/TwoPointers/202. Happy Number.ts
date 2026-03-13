function isHappy(n: number): boolean {
    let slow = n;
    let fast = n;
    while (fast !== 1) {
        slow = computeSumOfSquares(slow);
        fast = computeSumOfSquares(computeSumOfSquares(fast));
        // for cases like 10 and 100, where slow would be === 1
        if (slow !== 1 && fast !== 1 && slow === fast) return false;
    }
    return true;
};

function computeSumOfSquares(n: number) {
    let value = n
    let squaredValue = 0;

    while (value >= 10) {
        let remainder = value % 10;
        squaredValue += remainder ** 2;
        value = Math.floor(value / 10);
    }
    squaredValue += value ** 2;
    return squaredValue;
}




// CLEANER VERSION
function isHappy(n: number): boolean {
    let slow = n;
    let fast = computeSumOfSquares(slow);
    while (fast !== slow) {
        slow = computeSumOfSquares(slow);
        fast = computeSumOfSquares(computeSumOfSquares(fast));
    }
    return fast === 1;
};

function computeSumOfSquares(n: number) {
    let num = 0;
    while (n > 0) {
        let remainder = n % 10;
        num+= remainder ** 2;
        n = Math.floor(n/10);
    }
    return num
}
