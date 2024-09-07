const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const revColors = [];
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    revColors.unshift(color);
}
console.log(revColors);





// console.log(colors);

// reverse method
// const color = [...colors].reverse();
// console.log(color);

// for for loop without reverse method
// const revColor = [];
// for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     revColor.unshift(color);
// }
// console.log(revColor);

// Normarl Reverse Method
// const relations = ['ami', 'tumi', 'she'];
// const relation = [...relations].reverse();
// console.log(relation);

// Without Reverse Method

// const revRelations = [];
// for (let i = 0; i < relations.length; i++) {
//     const somporko = relations[i];
//     revRelations.unshift(relations);
// }
// console.log(revRelations);
