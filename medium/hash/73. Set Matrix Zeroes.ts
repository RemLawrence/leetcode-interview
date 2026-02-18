/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const zeroRow = new Set();
    const zeroCol = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRow.add(i);
                zeroCol.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroRow.has(i) || zeroCol.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
