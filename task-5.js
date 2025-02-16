const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let newArr = [...arr1, ...arr2];
console.log(newArr);

const person = {
  name: "John",
  age: 30,
};

person.gender = "male";
let newPerson = { ...person };
console.log(newPerson);
