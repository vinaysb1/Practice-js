// create an empty element
const arr = [1,2,3,4,"hi",{name:"vinay"},[1,2,3],4]
// const arr1 = new Array();
console.log(arr)

// access 1st and last element
const firstElement = arr[0];
const arrLength = arr.length;
const lastElement =arr[arrLength-1];
console.log(firstElement,arrLength,lastElement)

// Remove lastElement of array
const lastElement1 = arr.pop();
console.log(lastElement1)
// add element to end of array
arr.push(5);
console.log(arr);
//add element starting of an array
arr.unshift(0)
console.log(arr);
// remove 1st element
arr.shift();
console.log(arr);

// Loop through array
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.forEach((x,i) =>{
    console.log(x)
});
for (let i of arr){
    console.log(i)
}

// check if an element exist in an array
const findElement = (arr,target) => {
    for (let x of arr){
        if(x === target){
            return true;
        }
    }
    return false 
}
console.log(findElement(arr,"hi"))
console.log(findElement(arr, "H"));
console.log(arr.includes("hi"));

// find the index of element in array
const findElementIndex = (arr,target) => {
    for(let i =0;i<arr.length;i++){
        if (arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(findElementIndex(arr,"hi"));
console.log(arr.indexOf("hi"));

// HOw to add,delete and update elements from specific index
console.log(arr);
arr.splice(1,3);
console.log(arr);
arr.splice(1,0,2,3,4,5,6);
console.log(arr);
arr.splice(1,3,6,7,8);
console.log(arr);

// slice() example
const subArr = arr.slice(1,4);
console.log(subArr)
console.log(arr)

//shallow copy of array
console.log(arr)
const arrB =arr;
arrB.splice(1,4);
console.log(arrB,arr);

// Deep copy
const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1,4);
arrD.splice(1,4);
arrE.splice(1,3);
console.log(arrC,arrD,arrE,arr)


// Map,filter and Reduce
const x = [1, 4, 6, 0, -9, -5];
const mapArr = x.map((ele,i)=>ele*ele)
console.log(mapArr)

const positiveNumbers = x.filter((ele,i)=>ele > 0)
console.log(positiveNumbers);

const reduceArr = positiveNumbers.reduce((acc,cur) => acc+cur)
console.log(reduceArr)

//filter() vs find()
const positiveNumber = x.find((ele,i)=>ele>0)
console.log(positiveNumber);