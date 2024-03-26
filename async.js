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
