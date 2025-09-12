const romanToIntegerMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

function romanToInt(s: string): number {
    let result = 0;
    for (let i=0; i< s.length; i++) {
        result += romanToIntegerMap[s[i]];

        if (s[i] === 'V' || s[i] === 'X') {
            if (s[i-1] === 'I') {
                result-=2;
            }
        }
        if (s[i] === 'L' || s[i] === 'C') {
            if (s[i-1] === 'X') {
                result-=20;
            }
        }
        if (s[i] === 'D' || s[i] === 'M') {
            if (s[i-1] === 'C') {
                result-=200;
            }
        }
    }
    return result;
};
