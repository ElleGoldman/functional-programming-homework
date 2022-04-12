// 1. Sort func [{name: 'name', age: 18}, {name: 'name', age: 18}] by name/age(dsc/asc)

const arr = [
    {name: 'Ann', age: 21},
    {name: 'Alex', age: 18},
    {name: 'Mira', age: 20}
];

// Sort by name asc
// arr.sort(function (a, b) {
//         if (a.name > b.name) {
//             return 1;
//         }
//         if (a.name < b.name) {
//             return -1;
//         }
//         return 0;
//     });
//     console.log(arr);


// Sort by name dsc
arr.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1;
        }
        return 0;
    });
    console.log(arr);

// // Sort by age asc
// arr.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// });
// console.log(arr);

// // Sort by age dec
// arr.sort(function (a, b) {
//     if (a.age < b.age) {
//         return 1;
//     }
//     if (a.age > b.age) {
//         return -1;
//     }
//     return 0;
// });
// console.log(arr);

// Example
const arrNum = [10, 56, 28, 40, 16];
arrNum.sort(function(a, b) {
    return b - a;
});
console.log(arrNum);

const arrChar = ['A', 'G', 'X', 'Y', 'I'];
// arrChar.sort(function(a, b){
//     return b.localeCompare(a);
// });
arrChar.sort().reverse();
console.log(arrChar);
