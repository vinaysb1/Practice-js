// callback
function fetchData(callback) {
setTimeout(()=> {
    const data = {msg:'hello'};
    callback(null,data);
},2000);
}
fetchData((err,data)=>{
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
});

// promise 
function fetchData1() {
    return new Promise((resolve, reject) => {
        const data = {msg:"hi promise"};
        resolve(data);
    },2000);
}
fetchData1()
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

//Asyns/await
function fetchData2(){
    return new Promise((resolve,reject)=>{
        const data = {msg:"namaste async"};
        resolve(data);
    },2000)
}
async function getData() {
    try{
const data = await fetchData2();
console.log(data);
}catch (err) {
console.log(err)
}
}
getData()

// async example
const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];

const games = [
    { id: 101, name: 'Epic Adventure', genre: 'Adventure', price: 29.99 },
    { id: 102, name: 'Puzzle Mania', genre: 'Puzzle', price: 14.99 }
];

// Fetch user achievements with async/await
// const fetchUserAchievementsAsync = async (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = users.find(user => user.id === userId);
//             if (user) {
//                 setTimeout(() => {
//                     resolve(user.achievements);
//                 }, 500);
//             } else {
//                 reject('User not found');
//             }
//         }, 1000);
//     });
// };

// // Fetch game details with async/await
// const fetchGameDetailsAsync = async (gameId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const game = games.find(game => game.id === gameId);
//             if (game) {
//                 resolve(game);
//             } else {
//                 reject('Game not found');
//             }
//         }, 1000);
//     });
// };

// // Using async/await for cleaner code
// const displayUserAndGameDetails = async () => {
//     try {
//         const achievements = await fetchUserAchievementsAsync(1);
//         console.log('Achievements:', achievements);
//         const game = await fetchGameDetailsAsync(101);
//         console.log('Game:', game);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// displayUserAndGameDetails();

const fetchUserAsync = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ id: userId, name: 'GamerOne' }), 1000);
    });
};

const fetchUserAchievementsAsync = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(['First Blood', 'Puzzle Master']), 1000);
    });
};

const fetchGamesAsync = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            { id: 101, name: 'Epic Adventure' },
            { id: 102, name: 'Puzzle Mania' }
        ]), 1000);
    });
};

const fetchLeaderboardAsync = async (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([`Player1 - Game ${gameId}`, `Player2 - Game ${gameId}`]), 1000);
    });
};

const fetchLeaderboardStatusAsync = async (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Leaderboard for Game ${gameId} is active.`), 1000);
    });
};

const fetchGameNewsAsync = async (gameId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Latest news for Game ${gameId}`), 1000);
    });
};

const displayDetails = async () => {
    try {
        const user = await fetchUserAsync(1);
        console.log('User:', user);

        const achievements = await fetchUserAchievementsAsync(user.id);
        console.log('Achievements:', achievements);

        const games = await fetchGamesAsync();
        console.log('Games:', games);

        const leaderboard = await fetchLeaderboardAsync(games[0].id);
        console.log('Leaderboard:', leaderboard);

        const status = await fetchLeaderboardStatusAsync(games[0].id);
        console.log('Leaderboard Status:', status);

        const news = await fetchGameNewsAsync(games[0].id);
        console.log('Game News:', news);
    } catch (error) {
        console.error('Error:', error);
    }
};

displayDetails();