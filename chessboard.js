'use strict';

console.log('\n==== CHESSBOARD ====');

/**
 * CHESSBOARD
 * 
 * Write a program that creates a string that represents an 8x8 grid, using
 * newline characters to separate lines. At each position of the grid there is either a
 * space or a # character. The characters should form a chessboard.
 * 
 * Passing string to console.log should look like this:
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 */
const size = 8;
const space = ' ';
const hash = '#';
let board = '';
for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if((x + y) % 2 == 0) {
            board += space;
        } else {
            board += hash;
        }
    }
    board += '\n';
}

console.log(board);
