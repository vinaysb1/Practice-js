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

// Write a function that reverses a string. The input string is given as an array of characters s
// const s = ["h","e","l","l","o"]
// var  reverseString = function(s) {
//     return s.reverse();
// } 
// console.log(reverseString(s))

var reverseString1 = function(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
}

// Example usage
let s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString1(s)); // Output: ['o', 'l', 'l', 'e', 'h']

var isAnagram = function(s, t) {
    // Step 1: Split and sort the strings
    s = s.split("").sort();
    t = t.split("").sort();

    // Step 2: Check if the lengths are different
    if (s.length !== t.length) {
        return false;
    }

    // Step 3: Compare each character
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }

    // Step 4: Return true if all characters match
    return true;
};

// Example usage
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false

//using array of buckets -anagram
var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};

//longest common prefix
var longestCommonPrefix = function(strs){
    if (!strs.length) return "";
    let longestCommonPrefix = "";

    for(let i=0;i<strs[0].length;i++){
        if(strs[0]==="") return "";
    
        if(strs.every(str=>str[i]===strs[0][i])){
            longestCommonPrefix += strs[0][i]
        }else {
            break;
        }
    }
return longestCommonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""

// length Of Last Word
var lengthOfLastWord = function(s) {
    return s.trim().split(" ")[s.trim().split(" ").length -1 ].length;
 };
//  let sentence = "Hello World";// console.log(lengthOfLastWord(sentence)); // Output: 5

// sentence = "   fly me   to   the moon  ";// console.log(lengthOfLastWord(sentence)); // Output: 4

// Merge Strings Alternately
var mergeAlternately = function(word1,word2){
    let maxlength = Math.max(word1.length,word2.length)
    let res = []
    for (let i=0;i<maxlength;i++){
        res.push(word1[i])
        res.push(word2[i])
    }
    return res.join("");
}

// approach-2
var mergeAlternately1 = function(word1, word2) {
    let maxlength = Math.max(word1.length, word2.length);
    let res = [];
    
    for (let i = 0; i < maxlength; i++) {
        if (i < word1.length) {
            res.push(word1[i]);
        }
        if (i < word2.length) {
            res.push(word2[i]);
        }
    }
    
    return res.join("");
};

console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"




