enum TaskType {
    START = 'start',
    END = 'end'
}

// Initially I did not think to keep track of a prevTime but instead pushed everything from the log to stack.
// For problems like these I think the first thing to look at is the relationship between the items in the input array
function exclusiveTime(n: number, logs: string[]): number[] {
    const result: number[] = Array(n).fill(0);
    let stack = [];
    let prevTime = 0;
    for (const log of logs) {
        const [funcIdStr, taskType, timeStr] = log.split(':');
        const funcId = Number(funcIdStr);
        const time = Number(timeStr);

        if (taskType === TaskType.START) {
            if (stack.length > 0) {
                result[stack[stack.length-1]] += time - prevTime;
            }
            stack.push(funcId);
            prevTime = time;
        } else {
            const finished = stack.pop();
            result[finished] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }
            
    return result;
};
