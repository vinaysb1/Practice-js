// example1
function outerFunction() {
    const outerVar = 'I am outer';

    function innerFunction() {
        console.log(this); 
        console.log(outerVar); 
    }

    return innerFunction;
}

const employee = {temp:outerFunction()}
const temp = employee.temp;
temp()

// exampl-2
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
