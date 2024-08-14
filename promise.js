const fun3 = async () => {
    let res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("inside fun3 ")
    return res.json();
}
fun3().then(value => console.log(value))


const getBalance = () => {
    let balance = 10000;

    return {
        add: (value) => { balance = balance + value },
        getBalance: () => balance
    }

}

const obj = getBalance();
console.log(obj.getBalance())
obj.add(5000)
console.log(obj.getBalance())


