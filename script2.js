// 2.Implement map, filter,every,some,find,indexOf with .reduce()

function map(arr, func) {
    return arr.reduce((acc, curr) => {
        return [...acc, func(curr)];
    }, []);
}

Array.prototype.mapReduce = function (callback) {
    return this.reduce((acc, curr) => {
        return [...acc, callback(curr)];
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

Array.prototype.filterReduce = function (callback) {
    return this.reduce((acc, curr) => {
        const newArr = [...acc];
        if (callback(curr)) {
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

Array.prototype.everyReduce = function (callback) {
    return this.reduce((acc, curr) => {
        if (!callback(curr)) {
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

Array.prototype.someReduce = function (callback) {
    return this.reduce((acc, curr) => {
        if (callback(curr)) {
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

Array.prototype.indexOfReduce = function(value) {
    return this.reduce((acc, curr, i) => {
        let index = acc
        if (value === curr) {
            index = i
        }
        return index;
    }, -1);
}

const numbers = [1,2,3]
console.log(map(numbers, (el) => el + 1));
console.log(numbers.mapReduce((el) => el + 1));
console.log(filter(numbers, (el) => el > 1));
console.log(numbers.filterReduce((el) => el > 1));
console.log(indexOf(numbers, 1));
console.log(numbers.indexOfReduce(1));
console.log(every(numbers, (el) => el < 5));
console.log(numbers.everyReduce((el) => el < 5));
console.log(some(numbers, (el) => el > 1));
console.log(numbers.someReduce((el) => el > 1));

