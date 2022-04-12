// 2.Implement map, filter,every,some,find,indexOf with .reduce()

function map(arr, func) {
    return arr.reduce((acc, curr) => {
        return [...acc, func(curr)];
    }, []);
}

function filter(arr, func) {
    return arr.reduce((acc, curr) => {
        const newArr = [...acc];
        if (func(curr)) {
            newArr.push(curr);
        }
        return newArr;
    }, []);
}

function every(arr, func) {
    return arr.reduce((acc, curr) => {
        if (!func(curr)) {
            return false;
        }
        return acc;
    }, true);
}

function some(arr, func) {
    return arr.reduce((acc, curr) => {
        if (func(curr)) {
            return true
        }
        return acc
    }, false);
}

function indexOf(arr, value) {
    return arr.reduce((acc, curr, i) => {
        let index = acc
        if (value === curr) {
            index = i
        }
        return index;
    }, -1);
}

const numbers = [1,2,3]
console.log(map(numbers, (el) => el + 1));
console.log(filter(numbers, (el) => el > 1));
console.log(indexOf(numbers, 1));
console.log(every(numbers, (el) => el < 5));
console.log(some(numbers, (el) => el > 1));

