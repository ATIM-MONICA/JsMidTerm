function sumOfEvenNumbers(arr) {
    // Filter the array to get only even numbers
    // Use the reduce method to sum the filtered even numbers
    return arr.filter(num => num % 2 === 0) // Filter for even numbers
              .reduce((sum, num) => sum + num, 0); // Sum the even numbers, starting from 0
}

// Usage:
console.log(sumOfEvenNumbers([4, 5, 6, 7, 20, 77])); 