const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
// const person = persons.reverse();
const sortedPersons = persons.sort();
console.log(persons);

// const numbers = [4, 7, 2, 3, 8, 9, 1];
/**
 * Ascending order ---> smaller to larger
 * Descending order ---> larger to smaller
 */
const numbers = [4, 7, 12, 8, 43, 6, 1];
const numbers_asc = [...numbers].sort(function (a, b) { return a - b });
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a });
console.log(numbers_asc);
console.log(numbers_dsc);