function isValidSudoku(board: string[][]): boolean {
    const row = Array.from({ length: 9 }, () => new Set());
const col = Array.from({ length: 9 }, () => new Set());
const subBox = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cur = board[i][j];
            if (cur === '.') continue;

            if (row[i].has(cur)) {
                return false;
            }
            if (col[j].has(cur)) {
                return false;
            }
            const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (subBox[boxId].has(cur)) {
                return false;
            }
            
            row[i].add(cur);
            col[j].add(cur);
            subBox[boxId].add(cur);
        }
    }
    return true;
};
