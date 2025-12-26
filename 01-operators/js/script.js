//logical operators

//AND OPERATORD (&&)

//task 1

a = 0;
b = 1;
if (a++ && ++b) {
    console.log(`(a++ && ++b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ && ++b) a : ${a} b : ${b} is false`);
}

//task 2

a = 0;
b = 1;
if (++a && b) {
    console.log(`(++a && b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(++a && b) a : ${a} b : ${b} is false`);
}

//task 3

a = 0;
b = 1;
if (++a && --b) {
    console.log(`(++a && --b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(++a && --b) a : ${a} b : ${b} is false`);
}

//task 4

a = 0;
b = 1;
if (++a && b--) {
    console.log(`(++a && b--) a : ${a} b : ${b} is true`);
} else {
    console.log(`(++a && b--) a : ${a} b : ${b} is false`);
}

//task 5

a = 0;
b = 1;
if (a++ && --b) {
    console.log(`(a++ && --b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ && --b) a : ${a} b : ${b} is false`);
}

//task 6

a = 0;
b = 1;
if (a++ && b--) {
    console.log(`(a++ && b--) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ && b--) a : ${a} b : ${b} is false`);
}


//OR OPERATORS(||)

//task 11

a = 0;
b = 1;
if(a++ || ++b) {
    console.log(`(a++ || ++b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ || ++b) a : ${a} b : ${b} is false`);
}

//task 12

a = 0;
b = 1;
if(++a || b) {
    console.log(`(++a || b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(++a || b) a : ${a} b : ${b} is false`);
}

//task 13

a = 0;
b = 1;
if(a++ || --b) {
    console.log(`(a++ || --b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ || --b) a : ${a} b : ${b} is false`);
}

//task 14

a = 0;
b = 1;
if(a++ || b--) {
    console.log(`(a++ || b--) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ || b--) a : ${a} b : ${b} is false`);
}

//task 15

a = 0;
b = 1;
if(a++ || --b) {
    console.log(`(a++ || --b) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ || --b) a : ${a} b : ${b} is false`);
}

//task 16

a = 0;
b = 1;
if(a++ || b--) {
    console.log(`(a++ || b--) a : ${a} b : ${b} is true`);
} else {
    console.log(`(a++ || b--) a : ${a} b : ${b} is false`);
}