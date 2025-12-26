//factorial number//

function logfactorial(num){

    let a = 1;
    for( let i = 1; i<=num; i++){
        a *= i;
    }
    return a;

}
console.log(logfactorial(5));

//fibonacci series//

function fiboseries(num){
    let a = 0; b = 1;

    console.log(a);
    console.log(b);


for(let i = 2; i <= num; i++) {
    let x = a + b;
    console.log(x);
    a = b;
    b = x;
  }
}

fiboseries(10);