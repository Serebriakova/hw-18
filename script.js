
function mainFunction(callback) {
  const num1 = prompt("Enter number1");
  let num2;
  if (check(num1)) {
    num2 = prompt("Enter number2");
    if (check(num2)) {
      alert (callback(num1, num2));
    }
  } 
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
  return num1 ** num2;
}

function multiplay(num1, num2) {
  return num1 * num2;

}

function division(num1, num2) {
  return num1 / num2;
  
}
function modulo(num1, num2) {
  return num1 % num2;
}

mainFunction(exponentiation);
mainFunction (multiplay);
mainFunction (division);
mainFunction (modulo);
