// length of string
let firstname = "Viraj";
console.log(firstname.length);//5

// acess str elemnt
console.log(firstname.charAt(2))//r
console.log(firstname[2]);//r
console.log(firstname.charCodeAt(2));// r unicode is 114

// check presence of character 
console.log(firstname.includes("r")) //true
console.log(firstname.indexOf("i"));//1
console.log(firstname.lastIndexOf("i"))//1

// compare two strings
let anotherName = "Vishal"
console.log(firstname.localeCompare(anotherName));// -1 (& if strings are equal it return 0)

// replace substring
const str = "Vishal is best front developer.Vishal is best developer"
console.log(str.replace ("Vishal", "SUjit "))// // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log (str.replaceAll("Vishal","Sujit"))//Sujit is best front developer.Sujit is best developer

// Substring of string
console.log(str.substring(6,30));// is best front developer
console.log(str.slice(-10, -1));//develope

//split and join
console.log(str.split(""));
const subString = str.split("");
console.log(subString.join(""))

// Trim and case conversion
const trimStr = str.trim();
const trimStrStart =str.trimStart();
const trimstrEnd = str.trimEnd();
console.log(trimStr,trimStr.length)
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//convert number and object to string
const num = 123;
console.log(num,num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj,JSON.stringify(obj));

// concarenate strings  
const lastName = "Beelagi";
console.log(firstname + lastName)
console.log(`${firstname} ${lastName} is a Developer`)
console.log(firstname .concat(lastName, " is a " , "good"));

