// 3.Object deep clone
// const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// const person = {
//     name: {
//         first: 'John',
//         last: 'Doe'
//     }
// };

// const anotherPerson = deepCopy(person);
// anotherPerson.name.first = 'Jane';
// anotherPerson.name.last = 'Groe';

// console.log(person);
// console.log(anotherPerson);

const deepCopy = (obj) => {
    let copy, value;
  
    if (typeof obj !== "object" || obj === null) {
      return obj; 
    }
  
    copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      value = obj[key];
      copy[key] = deepCopy(value);
    }
  
    return copy;
};

const person = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    func: () => console.log(5)
};

const personCopy = deepCopy(person);
personCopy.name.first = 'Jane';
personCopy.func = () => console.log(1);

person.func();
personCopy.func();



