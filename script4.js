// 4.Sort array with numbers even asc odd dsc [4,5,3,6,7,1,2,9,8] =>[2,4,6,8,9,7,5,3,1]

function sort(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0).sort();
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => b - a);
    return [...evenNumbers, ...oddNumbers];
}

const array = [4,5,3,6,7,1,2,9,8];

console.log(sort(array));