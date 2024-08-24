class Order {
    constructor(orderId, price, totalItems) {
        this.orderId = orderId;
        this.price = price;
        this.totalItems = totalItems
    }

    getPrice() {
        return this.price
    }
}

const order1 = new Order(1, 2000, 4)
console.log(order1)
console.log(order1.getPrice())

class Student {
    constructor(name,usn,marks) {
        this.name =name;
        this.usn = usn ;
        this.marks =marks;
    }
    getMarks() {
        return this.marks
    }
}
const student1 = new Student("balu",55,70)
console.log(student1)
console.log(student1.getMarks())

// 2. Destructuring
// Object 
const company = {name:"everi",place:"manglore",type:"tech company"}
console.log(`I work at company named ${company.name}  which is a ${company.type}  located at ${company.place} `)

const {name,place,type} = company
console.log(`name ${name},place ${place}, type ${type}`)

const cars = ["honda","ford","maruti"]
const [car1, ,...car3] = cars
console.log(car3)
console.log(car1)

const arr5 = [1,2,[3,[4],5],6]
const arr4 =arr5.flatMap(x=>x)
console.log(arr4.flatMap(i=>i))

// 3. Default parameters

function hike(salary, percent = 10) {
    return salary + salary * percent / 100
}
const latestSal1 = hike(100000)
const latestSal2 = hike(100000, 30)
console.log(latestSal1) // 110k
console.log(latestSal2) // 130k

// 4. Rest or Spread

function sum(a, b, ...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) sum += args[i]
    return sum;
}

console.log(sum(2, 3, 5, 3, 2, 2))
console.log(sum(2, 4, 2, 8))


const { name: tempName,  ...copyComp } = company
console.log(tempName)
// console.log(newPlace)
console.log(copyComp)
console.log(Object.values(copyComp)); // Logs ['manglore', 'tech company']

// 5. Spread
const arr1 = [2, 3, 5, 3, 2, 2];
const arr2 = [2, 3, 5, 3, 7, 8, 8, 9]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const food = "PP";
const price = 25;
const isSpicy = true;
// let food;
// let price;
// let isSpicy;

// 6.Object Literal Extensions
const obj = {
    food,
    price,
    isSpicy,
    

}
console.log(obj)

// map
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1')
console.log(map)

// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// console.log( visitsCountMap ); // 123

// set
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(JSON.stringify({ name: "Sanjay" }));
set.add(JSON.stringify({ name: "Sanjay" }));
console.log(set)