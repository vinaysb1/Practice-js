function add (a,b,cb) {
    let result = a+b;
   cb(result)
}
function display(result){
    console.log(result)
}
(add(4,5,display));

function substract(x,y,cb1){
    let res = x-y;
    cb1(res)
}
substract(6,3,display)

const fun3 = function (value, cb1, cb2) {
    if (value == "first") {
        cb1(5, 6)
    } else { cb2(10, 23) }
}
fun3("first", (a, b) => { console.log(a + b) }, (a, b) => { console.log(a + b) })
 fun3("second", (a, b) => { console.log(a + b) }, (a, b) => { console.log(a + b) })

 const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];
const getUserById = (userId, callback) => {
    setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (user) {
            callback(null, user);
        } else {
            callback('User not found', null);
        }
    }, 1000); // Simulates a delay (e.g., network request)
};

// Use the callback function
getUserById(1, (error, user) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User:', user);
    }
});

const games = [
    { id: 101, name: 'Epic Adventure', genre: 'Adventure', price: 29.99 },
    { id: 102, name: 'Puzzle Mania', genre: 'Puzzle', price: 14.99 }
];


const fetchUserAchievements = (userId, callback) => {
    setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (user) {
            setTimeout(() => {
                const achievements = user.achievements;
                callback(null, achievements);
            }, 500);
        } else {
            callback('User not found', null);
        }
    }, 1000);
};

const fetchGameDetails = (gameId, callback) => {
    setTimeout(() => {
        const game = games.find(game => game.id === gameId);
        if (game) {
            callback(null, game);
        } else {
            callback('Game not found', null);
        }
    }, 1000);
};

// Callback hell example
fetchUserAchievements(1, (error, achievements) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Achievements:', achievements);
        fetchGameDetails(101, (error, game) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Game:', game);
            }
        });
    }
});
// Example 1
function multiply (a,b,cb4){
    let result = a*b;
    cb4(result)
}
function output(result){
    console.log(result)
}
multiply(5,4,output);

//Example 2
function fetchData (cb5) {
    setTimeout (()=>{
        let data = "Hi data";
        cb5(data);
    },1000)
}
function processData (data){
console.log(data)
}
fetchData(processData);