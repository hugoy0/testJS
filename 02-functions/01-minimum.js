'use strict';

console.log('\n==== MINIMUM ====');

/**
 * MINIMUM
 * 
 * Write a function that takes two arguments and return their minimum
 */

const minimum = (a, b) => {
    let min = a;
    if (a > b) min = b;

    return min;
}

console.log(minimum(7,8));
console.log(minimum(17,8));
console.log(minimum(20,40));
console.log(minimum(100,80));