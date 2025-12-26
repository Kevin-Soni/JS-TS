let a = 15;
let b = 25;
let c = 35;

if (a > b){
    if(a > c){
        console.log(`the biggest number is ${a}`);
    }
    else{
        console.log(`the biggest number is ${c}`);
    }

} else{
    if(b > c){
        console.log(`the biggest number is ${b}`);
    }
    else{
        console.log(`the biggest number is ${c}`);
    }
}