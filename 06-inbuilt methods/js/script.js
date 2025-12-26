//string methods

let firstname = "firstname"
let lastname = "lastname"

const user = {
    firstname: "kevin",
    lastname: "soni",
    username: "abcd",
    getfullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}


console.log(user.firstname)
console.log(user["lastname"])
console.log(user.getfullname())
console.log(user.getfullname(). toUpperCase())

console.log(firstname.toUpperCase())
console.log(lastname.toLowerCase())

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["chikko", 600]
]);

let numb = fruits.get("apples");
console.log(numb);