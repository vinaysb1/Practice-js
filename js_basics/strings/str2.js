// from fullstack trainer repo

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('fox');

console.log(words)

// A.
let username = "Gamer1";

// // Check minimum length
// if (username.length < 6) {
//     console.log("Username must be at least 6 characters long.");
// } else {
//     console.log(`${username} is valid`)
// }

username = "Gamer1%$##$";
// Check if username contains special characters
if (username.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    console.log("Username cannot contain special characters.");
} else {
    console.log(`${username} contains valid characters`)
}

// Simulate a database of existing usernames
const existingUsernames = {
    'alice': true,
    'bob': true,
    'charlie': true
};

// Method to check the uniqueness of a username
function checkUsernameUniqueness(username2) {
    return !existingUsernames[username2];
}

// Example username to check
let  username2 = 'david'; // Change this to test with different usernames

// Check if the username is unique
let isUnique = checkUsernameUniqueness(username2);

// Print message based on uniqueness
if (!isUnique) {
    console.log("Username is already taken.");
} else {
    console.log("Username is available.");
}

// // B. Game search
let games = ["Assassin's Creed", "Call of Duty", "The Legend of Zelda", "Final Fantasy"];

let searchQuery = "legend";

let searchResults = games.filter(game => game.toLowerCase().includes(searchQuery.toLowerCase()));

 console.log(searchResults);
// // Output: ["The Legend of Zelda"]

// C. Chat Filtering
let message = 'Hey, this game is awesome! You should try it out!';

let bannedWords = ['awesome', 'try'];

let isClean = !bannedWords.some(word => message.toLowerCase().includes(word));

if (isClean) {
    console.log('Message is clean and can be sent.');
} else {
    console.log('Message contains banned words and cannot be sent.');
}
// // D. String Formatting

let score = 2350.001;
console.log(typeof score)
let formattedScore = score.toLocaleString();

console.log(`Your score: ${formattedScore}`);
// Output: Your score: 2,350.001

// // E. Password Encryption
// const bcrypt = require('bcrypt');

// let password = 'mypassword';
// let saltRounds = 10;

// bcrypt.hash(password, saltRounds, function (err, hash) {
//     // Store the hash in the database
//     console.log('Hashed password:', hash);
// });

// // Later, when verifying the password
let hashedPassword = '...'; // Retrieved from the database
bcrypt.compare(password, hashedPassword, function (err, result) {
    if (result) {
        console.log('Password matches.');
    } else {
        console.log('Password does not match.');
    }
});