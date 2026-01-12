function evalRPN(tokens: string[]): number {
    const numbers: number[] = [];

    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            numbers.push(Number(token));
        } else {
            const a = numbers.pop()!;
            const b = numbers.pop()!;
            // MOST IMPORTANT STEP: Push back the computed result as the second operand
            // the next operator does not necessarily use the previously computed result.
            switch(token){
                case('*'):
                    numbers.push(a*b);
                    break;
                case('+'): 
                    numbers.push(a+b);
                    break;
                case('/'):
                    const q = b / a;
                    numbers.push(q > 0 ? Math.floor(q) : Math.ceil(q));
                    break;
                case('-'):
                   numbers.push(b-a)
                   break;
            }
        }
    }
    return numbers.pop();
};
