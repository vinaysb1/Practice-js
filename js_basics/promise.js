const cb1 =(resolve, reject) => {
    resolve("1st res");
  }
const prom1 = new Promise(cb1);
prom1.then((val) => {
  console.log(val);
});
prom1.catch((err) => {
  console.log("err", err);
});

// example-2
let prom2 = new Promise((res, rej) => {
  let sucess = true;
  if (sucess) {
    console.log("sucess");
  } else {
    rej("rejected");
  }
});
prom2.then((msg) => {
  console.log(msg);
});
prom2.catch((err) => {
  console.log(err);
});

// example-3
// const fetch = require('node-fetch')
let prom3 = new Promise((res,rej)=>{
  return  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if(!response.ok){
            throw new error("network issue")
        }
        return response.json();
    })
    .then(data => {res(data)})
    .catch(error => {rej(error)})
})
prom3.then(res => console.log(res));

// example-4 Promise.all
let promise1 = Promise.resolve(42);
let promise2 = 55;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hello");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// example-5 Promise.race
let promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "one");
});
let promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "two");
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
});
// promise.any
Promise.any([promise4, promise5]).then((value) => {
  console.log(value);
});
