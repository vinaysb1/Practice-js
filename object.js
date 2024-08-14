let obj1 = {
  name: "venky",
  age: 25,
  detail: function () {
    return `${this.name} ${this.age}`;
  }
};
function Person(name,age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("vinay",35)
const person2 = new Person("viraj",2)
console.log(person1.name,person1.age)

let sum  = (function(a,b) {
    return a+b
})(3,6)
console.log(sum);