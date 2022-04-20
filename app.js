var arrayNum = [1,3,2,1,4,4];
console.log(`Este es el aray: ${arrayNum}`);
function secondLargestNumber (numbers) {
    let first = numbers[0];
    let second = 0;
    for (let x = 0; x < numbers.length; x++) {
        const position = numbers[x];
        console.log(`position: ${position}`);
        if (position > first) {
            console.log( `aquí empieza position: ${position} *** first: ${first} *** second: ${second}`);
            second = first;
            first = position;
            console.log( `aquí termina position: ${position} *** first: ${first} *** second: ${second}`);
        } else {
            console.log(`${position} no es mayor a ${first}`);
        }
        if (position > second && position < first) {
            console.log( `aquí position: ${position} *** first: ${first} *** second: ${second}`);
            second = position;
            console.log( `aquí position: ${position} *** first: ${first} *** second: ${second}`);
        }
    }

    return second;
}

console.log(secondLargestNumber(arrayNum));