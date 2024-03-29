// object literals
let person = {
    firstName:"viraj",lastName:"beelagi",age:1
}

//constructor function
function Person(firstName,age){
    this.firstName = firstName,
    this.age = age
}
let person1 = new Person("yash",40)
let person2 = new Person("veer",35)

//class syntax
class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }     
}
function Person(firstName,age){
    this.firstName = firstName
    this.age = age
}