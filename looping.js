/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);
}

const numbers = [5, 56, 4847, 87, 879, 998, 95];
for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    console.log(numbers[i]);
}