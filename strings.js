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

// Substring of a String
console.log(str.substring(6,30));
console.log(str.slice(-10,-1));

// Split and Join
console.log(str.split(""));
const subString = str.split((" "));
console.log(subString.join(" "));

console.log(str.startsWith("vinay")); // true
console.log(str.endsWith("developer.")); // true

// Trim and Case Conversion
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Convert Number and Object to String
const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));

//Concatenate Strings
const lastName = "Beelagi";
console.log(firstName+lastName);
console.log(`${firstName} ${lastName}is a Best Developer`)
console.log(firstName.concat(lastName, " is a", " Best"));