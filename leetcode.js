var lengthOfLastWord = function(s) {
    // Step 1: Trim leading and trailing spaces
    const trimmedString = s.trim();
    console.log("Trimmed string:", trimmedString);

    // Step 2: Split the trimmed string into an array of words
    const wordsArray = trimmedString.split(' ');
    console.log("Words array:", wordsArray);

    // Step 3: Get the last word from the array
    const lastWord = wordsArray.at(-1);
    console.log("Last word:", lastWord);

    // Step 4: Return the length of the last word
    return lastWord.length;
};

// Example input
const inputString = "  Hello world  ";

// Calling the function
const result = lengthOfLastWord(inputString);
console.log("Length of last word:", result);
