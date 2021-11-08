
function mainFunction(callback) {
  const num1 = prompt("Enter number1");
  let num2;
  if (check(num1)) {
    num2 = prompt("Enter number2");
    if (check(num2)) {
      return callback(num1, num2);
    }
  } 
return;
}

function check(num) {
  if (num === null) {
    alert("Cancelled");
    return;
  } else if (num.trim() === "") {
    alert("Empty string");
    return;
  } else if (isNaN(num)) {
    alert("Not a number");
    return;
  }
  return true;
}

function exponentiation(num1, num2) {
  const result = num1 ** num2;
  alert(`${num1} raised to the power of ${num2} is ${result}`);
  return result;
}

function multiplay(num1, num2) {
  const result = num1 * num2;
  alert(`${num1} * ${num2} = ${result}`);
  return result;
}

function division(num1, num2) {
  const result = num1 / num2;
  alert(`${num1} / ${num2} = ${result}`);
  return result;
}
function modulo(num1, num2) {
  const result = num1 % num2;
  alert(`Remainder left over ${num1} devided by ${num2} is ${result}`);
  return result;
}

mainFunction(exponentiation);
// mainFunction (multiplay);
// mainFunction (division);
// mainFunction (modulo);
