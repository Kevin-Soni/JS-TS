const number1 = [15,89,56,23,78];
const number2 = number1.map(myfunction);

console.log(number2);

function myfunction(value,index,array) {
    return value * 2;   //map does not change original value
}


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);

console.log(names); // ["Alice", "Bob"]


//flatmap

const myarr = [50,40,30,20,10];
const newarr = myarr.flatMap((a) => a * 5);

console.log(newarr);