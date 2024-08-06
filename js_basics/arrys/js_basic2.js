let fruits = ['banana', 'apple', 'orange', 'banana'];

let slicedArray = fruits.slice(0, 0);
console.log(slicedArray); // Output: []

let concatenatedArray = fruits.concat(['grape', 'kiwi']);
console.log(concatenatedArray); // Output: [ 'banana', 'apple', 'orange', 'banana', 'grape', 'kiwi' ]

let sortedArray = fruits.sort();
console.log(sortedArray); // Output: [ 'apple', 'banana', 'banana', 'orange' ]

let reversedArray = fruits.reverse();
console.log(reversedArray); // Output:[ 'orange', 'banana', 'banana', 'apple' ]

let joinedString = fruits.join(', ');
console.log(joinedString); // Output: orange, banana, banana, apple

let cbFind = fruit => fruit === 'banana';
let foundFruit = fruits.find(cbFind);
console.log(foundFruit); // Output: 'banana'

let index = fruits.findIndex((fruit) => fruit === 'orange');
console.log(index); // Output: 2

let hasApple = fruits.some((fruit) => fruit === 'apple');
console.log(hasApple); // Output: true

let allFruitsAreLong = fruits.every((fruit) => fruit.length > 5);
console.log(allFruitsAreLong); // Output: false

// multi dimensional array
//example-1
let leaderboard = [
    ["Player 1", 1000],
    ["Player 2", 800],
    ["Player 3", 1200],
    ["Player 4", 950],
    ["Player 5", 1100]
];

console.log(leaderboard[0][0]); // Output: "Player 1"
console.log(leaderboard[2][1]); // Output: 1200

let threeDArray = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log(threeDArray[0][1][0]); // Output: 3
console.log(threeDArray[1][0][1]); // Output: 6
threeDArray[0][1][0] = 9; 
console.log(threeDArray);//[ [ [ 1, 2 ], [ 9, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ]
//example-2
let gameWorld = [
    // Zone 1
    [
        ["Player 1", [10, 20, 30]],
        ["Player 2", [15, 25, 35]]
    ],
    // Zone 2
    [
        ["Player 3", [50, 60, 70]],
        ["Player 4", [55, 65, 75]],
        ["Player 5", [45, 55, 65]]
    ],
    // Zone 3
    [
        ["Player 6", [80, 90, 100]]
    ]
];

console.log(gameWorld[0][1][0]); // Output: "Player 2"
console.log(gameWorld[1][2][1]); // Output: [45, 55, 65]