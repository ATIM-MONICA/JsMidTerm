function isPalindrome(word) {
    // Convert the word to lowercase to ensure the check is case-insensitive
    const lowerCasedWord = word.toLowerCase();
    
    // Compare the lowercase word to its reverse
    // If they are the same, it is a palindrome
    return lowerCasedWord === lowerCasedWord.split('').reverse().join('');
}

// Usage:
console.log(isPalindrome("Madam")); 
console.log(isPalindrome("welcome"));   