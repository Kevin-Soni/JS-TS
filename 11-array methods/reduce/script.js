1//1 . array built in reduce

let marks = [34,23,24,25,45,67,89,90,12,11];

const totalsum = marks.reduce(
    (prevValue, currentValue) => {
        console.log(prevValue, "+" , currentValue, "=" , prevValue + currentValue);
        return prevValue + currentValue;
    },1
)

console.log(totalsum);


console.log("custom reduce function");

// 2. custom reduce function

function reduce(callback, initialvalue) {
    let prevValue = initialvalue;
    for(let mark of marks) {
        prevValue = callback(prevValue, mark)
    }
    return prevValue; 
}
let totalsum2 = reduce((prevValue, curtvalue) => {
    console.log(prevValue, "+", curtvalue, "=", prevValue + curtvalue);
    return prevValue + curtvalue
}, 1 )

console.log(totalsum2);

