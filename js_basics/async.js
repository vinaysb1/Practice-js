// async example-1 
const fun1 = async ()=>{
console.log("this is Async")
return ("Hi async")
}

const fun2 = async () => {
    const res = await fun1()
    console.log(res)
}
fun2();

// example-2 Async
function delay(ms){
    return new Promise(resolve => 
        setTimeout(resolve,ms)
    )
}
async function run() {
console.log("start")

await delay(2000);

console.log("End")
}
run()

// example-3 basic async awit function
const getData =async()=>{
    let y = await "hello india";
    console.log(y)
}
getData()

// ex-4 promise function
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))
// above same function can write using async

async function runProcess() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json = await response.json()
    console.log(json)
}
runProcess();

// above same example using try ,catch with arrow
const runProcess1 = async()=> {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json()
        console.log(json)
    }catch (error){
        console.log(error)
    }
};
runProcess1();

// eaxmple refference thefullstacktrainer
let url ='https://jsonplaceholder.typicode.com/users/1';
async function fetchData(){
    let response_data = await fetch(url);
    console.log(response_data.status)//ok
    console.log(response_data.statusText);
    if(response_data.status===200){
        let data = await response_data.text();
        console.log(data);//200
    }
}

// example from odin project
async function getPersonInfo(name) {
    const people = await server.getPeople();
    const person = people.find(perrson => {return person.name === name})
    return person;    
}

// using try ,cath above function
async function getPersonInfo1(name) {
    const people = await server.getPeople();
    
}