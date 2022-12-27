'use strict';

console.log('\n==== REVERSING AN ARRAY ====');

/**
 * Arrays have a reverse method that changes the array by inverting the order in
 * which its elements appear. For this exercise, write two functions,
 * reverseArray and reverseArrayInPlace. The first, reverseArray, takes an
 * array as argument and produces a new array that has the same elements in the
 * inverse order. The second, reverseArrayInPlace, does what the reverse
 * method does: it modifies the array given as argument by reversing its elements. 
 * Neither may use the standard reverse method.
 * 
 * Thinking back to the notes about side effects and pure functions in the previous
 * chapter, which variant do you expect to be useful in more situations? Which one 
 * runs faster?
 */

const originArray = ["A", "B", "C"];
const reverseArray = (arr) => {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(reverseArray(originArray));



const arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11];
const reverseArrayInPlace = (arr) => {
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        let current = arr[i]; // toma el primero y/o actual durante el ciclo
        arr[i] = arr[arr.length - 1 - i]; // toma el penultimo, en caso de la primer vuelta, se toma el ultimo y lo asigna al index actual
        arr[arr.length - 1 - i] = current; // coloca en el ultimo - index el indice actual
    }

    return arr;
}

console.log(reverseArrayInPlace(arrayValue));
console.log(reverseArrayInPlace(originArray));
