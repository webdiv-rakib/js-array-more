const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);

const oddNumbers = [];
for (let x = 0; x < numbers.length; x++) {
    if (oddNumbers[x] % 2 !== 0) {
        oddNumbers.push(numbers[x]);
    }
}
console.log(oddNumbers);