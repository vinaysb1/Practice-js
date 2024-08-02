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