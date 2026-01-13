// VARIABLES
let num = 6;
console.log(num);

num = 10;
console.log(num);

// CONSTANTS
const PI = 3.14;
let radius = 3;
console.log(PI * radius * radius);

// TYPE COERCION
const one = 1;
const two = '2';
console.log(one + two);

// GLOBAL & BLOCK SCOPE
let course = "CSE131";

if (true) {
    let student = "John";
    console.log(course);
    console.log(student);
}

console.log(course);
// console.log(student); // intentionally commented out
