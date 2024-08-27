// Section 7: Operators for Mathimatical Computation
/*
let num1 = prompt("Enter a number");
console.log(factorial(num1));
function factorial(num1) {
    if (num1 == 0 || num1 == 1) {
        return 1;
    } else {
        return num1 * factorial(num1 - 1);
    }
}

//Section 8: Conditional Statements Leap Year

let year = prompt("Enter a year");
console.log(isLeapYear(year));
function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            return year % 400 == 0;
        }
        return true;
    }
    return false;
}
    */
//Section 9: Loops 1-100 then add up all the numbers in a for loop
/*
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Section 10: Calculator (Addition, Subtraction, Multiplication, Division)

var a = Number(prompt("Enter a number"));
var b = Number(prompt("Enter another number"));
let operation = prompt("Enter an operation");

if (operation == "add" || operation == "+") {
    alert(a + b);
}

if (operation == "subtract" || operation == "-") {
    alert(a - b);
}

if (operation == "multiply" || operation == "*") {
    alert(a * b);
}

if (operation == "divide" || operation == "/") {
    alert(a / b);
}
*/
//var for every data type
n = 12

console.log("Hello World");
console.log(n);
if (n < 10) {
    console.log("true");
} else {
    console.log("false");
}
console.log() 