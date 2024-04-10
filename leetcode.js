// //length-of-last-word
// var lengthOfLastWord = function(s) {
//     // Step 1: Trim leading and trailing spaces
//     const trimmedString = s.trim();
//     console.log("Trimmed string:", trimmedString);

//     // Step 2: Split the trimmed string into an array of words
//     const wordsArray = trimmedString.split(' ');
//     console.log("Words array:", wordsArray);

//     // Step 3: Get the last word from the array
//     const lastWord = wordsArray.at(-1);
//     console.log("Last word:", lastWord);

//     // Step 4: Return the length of the last word
//     return lastWord.length;
// };

// // Example input
// const inputString = "  Hello world  ";

// // Calling the function
// const result = lengthOfLastWord(inputString);
// console.log("Length of last word:", result);

// way-2
var lengthOfLastWord = function(s) {
    // Step 1: Initialize a variable to hold the length of the last word
    let res = 0;
    
    // Step 2: Trim leading and trailing spaces from the input string
    let trimmedS = s.trim();
    console.log("Trimmed string:", trimmedS); // Output: Trimmed string: Hello world
    
    // Step 3: Loop through the characters of the trimmed string starting from the end
    for (let i = trimmedS.length - 1; i >= 0; i--) {
        // Step 4: If a space character is encountered, exit the loop
        if (trimmedS[i] === " ") {
            console.log("Encountered a space character. Exiting loop."); // Output: Encountered a space character. Exiting loop.
            break;
        }
        
        // Step 5: If a non-space character is encountered, increment the count of the last word
        res++;
    }

    // Step 6: Return the length of the last word
    return res;
};

// Example input
const inputString = "  Hello world  ";

// Calling the function
const result = lengthOfLastWord(inputString);
console.log("Length of last word:", result); // Output: Length of last word: 5