// 3.Object deep clone
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const person = {
    name: {
        first: 'John',
        last: 'Doe'
    }
};

const anotherPerson = deepCopy(person);
anotherPerson.name.first = 'Jane';
anotherPerson.name.last = 'Groe';

console.log(person);
console.log(anotherPerson);