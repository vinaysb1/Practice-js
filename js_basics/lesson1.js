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