
let defaulttype = 234;
let isActive: boolean = true;
let decimal: Number = 5;
let test: string = "kevinn";
let marks: number[] = [123,456,789];
let tuple: [number, string] = [1, "hello"];

type userinfo = {
    name: string;
    age: number;
    isAdmin?: boolean;
};

interface userdetails{
    name: string;
    age: number;
    isAdmin?: boolean;
}

interface username{
    name: string;
    age: number;
    email: string;

}



let obj1: userinfo = { name: "kevin", age: 25};
let obj2: userdetails = { name: "jayy", age: 28};
let obj3: username = { name: "aditya", age: 22, email: "aditya213@gmail.com"}
let obj4: username = { name: "sahil", age: 25, email: "sahilsoni589@gmail.com"}

function sum(a: number, b: number): number {
    return a + b;
}
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

interface book{
    name: string;
    pages: number;
    author: string;
    price: number;
    description?: string;
    userdetails?: userdetails;
}

let book1: book = {
    name: "AI basics",
    pages: 200,
    author: "jane doe",
    price: 29.99,

};

let book2: book = {
    name: "learning typescript",
    pages: 155,
    author: "john smith",
    price: 55.55,
    description: "A comprehensive guide to typescript",
};

let book3: book = {
    name: "Advanced programming",
    pages: 500,
    author: "alice johnson",
    price: 22.55,
    userdetails: {
        name: "bob brown",
        age: 25,
    },
}

console.log(book1);
console.log(book2);
console.log(book3);



