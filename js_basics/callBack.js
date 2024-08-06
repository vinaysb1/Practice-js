// example-1
function fun1(test){
    console.log("hi test")
    
}
function test(cb){
    cb("calling")
}
test(fun1);
// example-2
function greet(welcome){
    console.log("welcome to india")
    welcome()
}
function exit(){
    console.log("i am going")
}
greet(exit);
// example-3
function calculate(a,b,operation){
    let result = operation(a,b)
    console.log(result)
}
function add(x,y){
    return x+y
}
function mul(x,y){
    return x*y
}
 calculate(3,4,add)