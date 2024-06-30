//length of string
let firstName = "Vaishali";
console.log(firstName.length);
//Access of string
console.log(firstName.charAt(2));
console.log(firstName[2]);
console.log(firstName.charCodeAt(2));
//Check Presence of Character
console.log(firstName.includes("r"));
console.log(firstName.includes("a"));
console.log(firstName.indexOf("s"));
console.log(firstName.indexOf("v"));
console.log(firstName.lastIndexOf("i"));
// Compare Two Strings
let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName));
let anotherName1 = "Vaishali";
console.log(firstName.localeCompare(anotherName1));

// Replace Substring
const str = "vinay is best frontend developer.vinay is best developer.";
console.log(str.replace("vinay","sanjay"));
console.log(str.replaceAll("vinay","sanjay"));