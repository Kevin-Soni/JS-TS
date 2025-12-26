//The every() method checks if all array values pass a test.

const numbers = [45,89,12,23,9];
const allover18 = numbers.every(myFunction);

console.log(allover18);

function myFunction(value){
    return value > 18;
}