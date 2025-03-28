//== (loose comparison) Compares two values for equality after converting both values to a common type (type coercion).

//=== (strict comparison) Compares both value and type without performing type coercion.
// Both must be the same type and value to be considered equal.

//Example:
console.log(9 == "9");  // true (type coercion)
console.log(9 === "9"); // false (different types)
