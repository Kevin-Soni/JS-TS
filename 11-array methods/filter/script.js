const numbers = [89,2,9,56,33, 18];
const over18 = numbers.filter(myFunction);
console.log(over18);

function myFunction (value,index,array){
return value > 18;
}

//using callback 

const number = [1, 2, 3, 4, 5];

const even = number.filter(num => num % 2 === 0);

console.log(even); // [2, 4]


console.log("=================");

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Cara", age: 19 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// [{ name: "Bob", age: 25 }, { name: "Cara", age: 19 }]

