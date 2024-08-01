// switch statement example
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "error";
      }
      break;
  }
  return result;
}
console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(10, 5, "-")); // Output: 5
console.log(calculator(10, 5, "*")); // Output: 50
console.log(calculator(10, 5, "/")); // Output: 2

// conditional ternary operator 
// syntax : condition?exp1:exp2
let age = 18
let canVote = (age>=18) ? "eligible" : "noteligible"
console.log(canVote)

let isMember = true;
let discount = (isMember) ? 1:5;
console.log(discount);

//type of operand
console.log(typeof 42);            // "number"
console.log(typeof 'Hello');       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof {name: 'Alice'}); // "object"
console.log(typeof [1, 2, 3]);     // "object" (arrays are considered objects)
console.log(typeof null);          // "object" (this is a historical quirk in JavaScript)
console.log(typeof function(){});  // "function"
console.log(typeof Symbol('id'));  // "symbol"
