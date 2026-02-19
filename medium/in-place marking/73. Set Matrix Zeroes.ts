/**
 Do not return anything, modify matrix in-place instead.
 */

function setZeroes(matrix: number[][]): void {
    // Check if the first row/col has 0
    let firstRowHasZero = false;
    let firstColHasZero = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Set in-place 0 markings
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                // mark first in row and col as 0
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Update the submatrix with in-place marking
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Finally, update row and col if there were native 0s
    if (firstRowHasZero) {
        // Mark that col as 0
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColHasZero) {
        // Mark that row as 0
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

};
