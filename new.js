// // const users = [
// //     { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
// //     { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
// //     { id: 3, username: 'GamerThree', achievements: ['Victory'] }
// // ];

// // const games = [
// //     { id: 101, name: 'Epic Adventure', genre: 'Adventure', price: 29.99 },
// //     { id: 102, name: 'Puzzle Mania', genre: 'Puzzle', price: 14.99 }
// // ];

// // const fetchUserAsync = async(userId) => {
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=> resolve({id:userId,name:'GamerOne'}),1000)
// //     }) 
// // }

// // const fetchUserAchievementsAsync = async(userId) =>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=> resolve(['First Blood','Puzzle Master']),1000)
// //     })
// // }
// // const fetchGamesAsync = async () => {
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=> resolve([
// //             { id: 101, name: 'Epic Adventure' },
// //             { id: 102, name: 'Puzzle Mania' }
// //         ]),1000)
// //     })
// // }
// // const fetchLeaderboardAsync = async (gameId) => {
// //     return new Promise ((resolve,reject)=>{
// //         setTimeout(() => resolve([`Player1 - Game ${gameId}`, `Player2 - Game ${gameId}`]), 1000); 
// //     })
// // }
// // const displayDetails = async ()=> {
// //     try{
// //         const user = await fetchUserAsync(1);
// //         console.log('User:',user)

// //         const achievements = await fetchUserAchievementsAsync(user.id)
// //         console.log('Achievements:',achievements)

// //         const games = await fetchGamesAsync()
// //         console.log('Games:',games)

// //         const leaderboard = await fetchLeaderboardAsync(games[0].id)
// // console.log('Leaderboard:',leaderboard)
// //     }catch(error) {
// //     console.error('error:',error)
// //     }
// // }
// // displayDetails();

// function greet (name) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve(`hi, ${name}`)
//         },2000)
//     })
// }
// greet("viraj")
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => {
//         console.error(error)
//     })

//     // example promise.all
//     function fetchData1(){
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve('data fro API 1')
//             },1000)
//         })
//     }

//     function fetchData2(){
//         return new Promise((resolve)=>{
// setTimeout(()=>{
//     resolve('data from API2')
// },2000)
//         })
//     }

//     Promise.all([fetchData1(),fetchData2()])
//     .then (result => {
//         console.log('Result:',result)
//     }).catch(error => {
//         console.error(error)
//     })

//     function slow(){
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve('slow promise')
//             },2000)
//         })
//     }
//     function fast() {
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('fast promise')
//     },1000)
// })
//     }

//     Promise.race([slow(),fast()])
//     .then(result => {
//         console.log('1st resolved:',result)
//     })
//     .catch(error => {
//         console.error(error)
//     })

//     async function fetchData (){
//         try{
//             const data = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
//             .then (response => {
//                 if(!response.ok){
//                     throw new error("notwork problem")
//                 }
//                 return response.json();
//             })
//             console.log('data:',data)
//             } catch(error){
//                 console.error("error:",error)
//             }
//     }
//     fetchData()

// const users = [
//     { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
//     { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
//     { id: 3, username: 'GamerThree', achievements: ['Victory'] }
// ];

// const fetchUserPromise = (userId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = users.find(user => user.id === userId);
//             if (user) {
                
//                     resolve(user);
                
//             } else {
//                 reject('User not found');
//             }
//         }, 1000);
//     });
// };
// fetchUserPromise(1).then(resolve=> console.log(resolve))
// .catch(error=> console.log("error:",error))

const users = [
    { id: 1, username: 'GamerOne', achievements: ['First Blood', 'Puzzle Master'] },
    { id: 2, username: 'GamerTwo', achievements: ['High Score'] },
    { id: 3, username: 'GamerThree', achievements: ['Victory'] }
];

const getUserById = async (id) => {
    try {
        // Simulate an asynchronous operation with Promise
        const user = await new Promise((resolve, reject) => {
            const foundUser = users.find(user => user.id === id);
            console.log(foundUser)
            if (foundUser) {
                resolve(foundUser);
            } else {
                reject('User not found');
            }
        });
        console.log(user);
    } catch (error) {
        console.log(`the error name is ${error.name} and msg is ${error.message}`);
    }
};

getUserById(4);  // Replace with the ID you want to test











