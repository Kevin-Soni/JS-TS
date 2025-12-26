function funcname(v1, v2, v3 = 0){
    return v1 + v2 + v3
}

let varFun = function(v1, v2, v3 = 0) {
    return v1 + v2+ v3
}

let arrfun = (v1, v2, v3) => { //with `{}` need explicit return
    return v1 + v2 + v3
}

let arrfun = ( v1, v2, v3) => v1 + v2 + v3 // not `{}` then auth return is implicit

let arrfun = v1 => v1 * v1

let result1 = funcname(10,20,30)
let result2 = varFun(10,20,30)
let result3 = arrfun(20)

console.log(`result1: ${result1}`);
console.log(`result2: ${result2}`);
console.log(`result3: ${result3}`);

