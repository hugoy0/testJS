var arrayNum = [1,3,2,1,4,4,5];

console.log(`Este es el aray: ${arrayNum}`);

const secondLargestNumber = (numbers) => {
    let first = numbers[0];
    let second = 0;
    for (let x = 0; x < numbers.length; x++) {
        const position = numbers[x];
        if (position > first) {
            second = first;
            first = position;
        } else if (position > second && position < first) {
            second = position;
        }
    }

    return [second, first];
}

console.log(secondLargestNumber(arrayNum));