'use strict';
console.log('\n==== LOOPING A TRIANGLE ====');
/**
 * LOOPING A TRIANGLE
 * 
 * Write a Loop that makes seven calls to console.log to output the following triangle:
 * *
 * **
 * ***
 * ****
 * *****
 * ******
 * *******
 */

let x = 1;
let hash = '#';
let string = '';
while (x <= 7) {
    string = string + hash;
    console.log(`${string}\n`);
    x++;
}
