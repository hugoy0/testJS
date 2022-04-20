'use strict';

console.log('\n==== FIZZBUZZ ====');
/**
 * FIZZBUZZ
 * 
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print 'Fizz' instead of the 
 * number, and for numbers divisible by 5 (and not 3), print 'Buzz' instead.
 * 
 * When you have that working, modify your program to print 'FizzBuzz'
 * for numbers that are divisible by both 3 and 5 (and still print 'Fizz' or
 * 'Buzz' for numbers divisible by only one of those).
 */

for (let x = 1; x <= 100; x++) {
    let number = x
    let value;
    // switch (number) {
    //     case( number % 3 == 0 && number % 5 == 0):
    //         value = 'FIZZBUZZ'
    //         break;
    //     case number % 3 == 0:
    //         value = FIZZ;
    //         break;
    //     case number % 5 == 0:
    //         value = BUZZ;
    //         break;
    //     default:
    //         value = number;
    //         break;
    // }
    if (number % 3 == 0 && number % 5  == 0) {
        value = 'FIZZBUZZ';
    } else if (number % 5  === 0){
        value = 'BUZZ';
    } else if (number % 3 === 0){
        value = 'FIZZ';
    } else {
        value = number;
    }
    console.log(value);
}
