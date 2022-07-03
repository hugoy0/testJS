'use strict';

console.log('\n==== RECURSION ====');

/**
 * RECURSION
 * 
 * We've seen that % can be used to test whether
 * a number is even or odd by using %2 to see whether it's divisible by two
 * 
 * Here's another way to define whether a positive whole number is even or odd:
 * - Zero is even
 * - One is odd
 * - For any number N, its evennes is the same as N - 2
 * 
 * Define a recursive function _isEven_ corresponding to the description.
 * The function should accept a single parameter (a positive, whole number)
 * and return a Boolean.
 * 
 * Test it on 50 and 75. See how it behaves on -1. Why? Think in a way to fix it.
 */

const isEven = (n) => {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return isEven(n - 1)
    } else {
        return isEven(n - 2);
    }
};
console.log('Is your number Even?: \n', isEven(50));
