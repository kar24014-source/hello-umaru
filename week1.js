// Constants and Variables
const PI = 3.14;
let radius = 3;
let area = 0;

// Calculate area
area = PI * radius * radius;
console.log("Area 1:", area);

// Update radius and recalculate
radius = 4;
area = PI * radius * radius;
console.log("Area 2:", area);

// Type Coercion
const one = 1;
const two = '2';
console.log("Type Coercion Example:");
console.log("one + two =", one + two); // What happens here?
console.log("one + Number(two) =", one + Number(two)); // Explicit conversion

// Global and Block Scope
let course = "CSE131"; // Global scope
console.log("\nScope Examples:");

if (true) {
    let student = "John"; // Block scope
    console.log("Inside block:");
    console.log("Course:", course); // Works - course is global
    console.log("Student:", student); // Works - within the block
}

console.log("Outside block:");
console.log("Course:", course); // Works - global scope
// console.log("Student:", student); // This would fail - commented out

// Additional practice with let vs const
const FIXED_VALUE = 100;
let changeableValue = 50;

console.log("\nConst vs Let:");
console.log("Fixed value:", FIXED_VALUE);
console.log("Changeable value:", changeableValue);

changeableValue = 75;
console.log("Updated changeable value:", changeableValue);

// FIXED_VALUE = 200; // This would cause an error - try uncommenting to see

// Using var (for comparison)
var oldWay = "I'm hoisted!";
console.log("\nVar example (with hoisting):", oldWay);