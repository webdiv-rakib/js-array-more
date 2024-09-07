// we will reverse this array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// numbers.reverse();
// const number = numbers.reverse();
// console.log(number);

// using for of
const rev_numbers = [];
for (let num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

// reverse using for loop
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
// console.log(reversed_numbers);

// decremental for loop
// reversed loop using for loop
const revRevNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
    revRevNumbers.push(num);
}
console.log(revRevNumbers);