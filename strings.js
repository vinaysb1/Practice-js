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

//productExceptSelf aproach-1
var productExceptSelf = function(nums) {
    const length = nums.length;
    const answer = new Array(length);
    
    // Initialize the answer array with 1s
    for (let i = 0; i < length; i++) {
        answer[i] = 1;
    }
    
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};

// Example usage:
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]

// productExceptSelf aproach-2
var productExceptSelf = function(nums) {
    const length = nums.length;
    const answer = new Array(length).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};

// Example usage:
const nums3 = [1, 2, 3, 4];
console.log(productExceptSelf(nums3)); // Output: [24, 12, 8, 6]

const nums4 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums4)); // Output: [0, 0, 9, 0, 0]

//  productExceptSelf aproach-3
var productExceptSelf = function(nums) {
    // Array to store all left multiplication
    const left = new Array(nums.length);

    // Array to store all right multiplication
    const right = new Array(nums.length);

    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = left[i] * right[i];
    }

    return ans;
};

// Example usage:
const nums5 = [1, 2, 3, 4];
console.log(productExceptSelf(nums5)); // Output: [24, 12, 8, 6]

const nums6 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums6)); // Output: [0, 0, 9, 0, 0]


