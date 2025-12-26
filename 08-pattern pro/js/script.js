let result = "";

for(let row = 1; row<=5; row++ ){
    for(let col = 1; col<=5; col++){
        result = result + "*"
    }
    result = result + "\n"
}
console.log(result);

console.log("============");

//left half pyramid with stars

let result2 = "";

for(let row = 1; row<=5; row++ ){
    for(let col = 1; col<=row; col++){
        result2 = result2 + "*"  //for numbers "*" -> `${row}`
        
    }
    result2 = result2 + "\n"
}
console.log(result2);



console.log("============");

//left half pyramid with numbers
let num = ""

for(let row = 1; row<=5; row++){
    for(let col = 1; col<=row; col++){
        num = num + `${row}`
    }
    num = num+ "\n"

}
console.log(num);

console.log("============");

//left half pyramid incresing number


let n = 4;
let incre = "";
let number = 1;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        incre += number + " ";
        number++;
    }
    incre += "\n";
}
console.log(incre);

console.log("============");

//right half pyramid with stars

let output = "";
let p = 4;

for(let i = 0; i<=p; i++){
    //loop for space
    for(let s = 0; s < p-i; s++){
        output += " ";
    }

    // loop for print stars

    for(let j = 0; j <= i; j++){
        output += "*"
    }

    output += "\n";
}
console.log(output);


console.log("============")

//right half pyramid with numbers

let right = "";
let k = 4;

for(let i = 0; i<=k; i++){
    //loop for space
    for(let s = 0; s < k-i; s++){
        right += " ";
    }

    // loop for print stars

    for(let j = 0; j <= i; j++){
        right += (j + 1);
    }

    right += "\n";
}
console.log(right);



//inverted left half pyramid with star


let invert = "";
let left = 5;

for(let i = left; i >= 1; i--){
    for(let j = 0; j < i; j++){
        invert += "*";
    }
    invert += "\n";
}
console.log(invert);

//inverted right half pyramid with stats

let inverte = "";
let x = 5;

for (let i = x; i >= 1; i--){
    for(let s = 0; s <= n - i; s++){
        inverte += " ";

    }
    for(let j = 0; j < i; j++){
        inverte += "*";
    }
    inverte += "\n";
}
console.log(inverte);














