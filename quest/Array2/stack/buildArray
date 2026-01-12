function buildArray(target: number[], n: number): string[] {
    let curr = 1;
    const result: string[] = [];
    for (const need of target) {
        while (curr < need) {
            result.push("Push");
            result.push("Pop");
            curr++;
        }
        result.push("Push");
        curr++;
    }
    return result;
};
