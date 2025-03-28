//Both iterate over arrays.

//forEach() executes a function on each element but does not return a new array.

//map() executes a function on each element and returns a new array.

//Example:

let numbers = [0, 2, 3];
numbers.forEach(number => console.log(number * 3)); // Prints: 0, 6, 9
let doubled = numbers.map(number => number * 3); 

