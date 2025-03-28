//var: Function-scoped, can be redeclared, does not support block scope.

//let: Block-scoped, cannot be redeclared, but can be reassigned.

//const: Block-scoped, cannot be reassigned or redeclared. i.e, used on variables that cannot have their initial value changed.

// Example:

   // Calling x after definition
var x = 6;
console.log(x); // Output is 6

// Calling y after definition
let y = 10;
console.log(y); // Output is 10

// Calling var z before definition will return undefined
console.log(z); // Output is undefined (because var is hoisted)
var z = 2;

//const
const numbers = [9, 4, 5];

for (const num of numbers) {
    console.log(num); 
}

// Modifying the array elements is allowed but Reassigning the whole array is NOT allowed
numbers[0] = 10;
console.log(numbers); 






