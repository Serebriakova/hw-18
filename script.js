
function mainFunction(callback) {
  const num1 = prompt("Enter number1");

  if (num1 === null) {
    alert("Cancelled");
    return;
  } else if (num1.trim() === "") {
    alert("Empty string");
    return;
  } else if (isNaN(num1)) {
    alert("Not a number");
    return;
  }

  const num2 = prompt("Enter number2");

  if (num2 === null) {
    alert("Cancelled");
    return;
  } else if (num2.trim() === "") {
    alert("Empty string");
    return;
  } else if (isNaN(num2)) {
    alert("Not a number");
    return;
  }
  return callback(num1, num2);
}

function exponentiation(num1, num2) {
  const result = num1 ** num2;
  alert(`${num1} raised to the power of ${num2} is ${result}`);
}

function multiplay(num1, num2) {
  const result = num1 * num2;
  alert(`${num1} * ${num2} = ${result}`);
}

function division(num1, num2) {
  const result = num1 / num2;
  alert(`${num1} / ${num2} = ${result}`);
}
function modulo(num1, num2) {
  const result = num1 % num2;
  alert(`Remainder left over ${num1} devided by ${num2} is ${result}`);
}

mainFunction(exponentiation);
mainFunction (multiplay);
mainFunction (division);
mainFunction (modulo);
