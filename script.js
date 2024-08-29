// Section 7: Operators for Mathimatical Computation
/*
console.group("Section 7: Operators for Mathimatical Computation");
let num1 = prompt("Enter a number");
console.log(factorial(num1));
function factorial(num1) {
    if (num1 == 0 || num1 == 1) {
        return 1;
    } else {
        return num1 * factorial(num1 - 1);
    }
}
console.groupEnd();

/*

//Section 8: Conditional Statements Leap Year

console.group("Section 8: Conditional Statements Leap Year");
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
console.groupEnd();

/*

//Section 9: Loops 1-100 then add up all the numbers in a for loop
console.group("Section 9: Loops 1-100 then add up all the numbers in a for loop");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
console.groupEnd();

/*

//Section 10: Calculator (Addition, Subtraction, Multiplication, Division)
console.group("Section 10: Calculator (Addition, Subtraction, Multiplication, Division)");
console.log("Calculator (Addition, Subtraction, Multiplication, Division)");
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
console.groupEnd();

/*

//Section 11: var for every data type

console.group("Section 11: var for every data type");
n = 12
john =
    console.log("Hello World");
console.log(n);
if (n < 10) {
    console.log("true");
} else {
    console.log("false");
}
console.log(john)
typeof null === "object"
'this is a string';

const user = {
    name: "John",
    age: 30
};

const users = ['John', 'Jane', 'Mark'];

console.log(users[1]);

console.groupEnd();

*/

//Section 12: Display a list of food items and prices using HTML & JS

const chicken = {
    Cost: '$4'
};

const beef = {
    Cost: '$3'
};

const pork = {
    Cost: '$6'
};


document.write('<li><ul tag="chicken">Chicken ' + getCost.call(chicken) + '</ul><ul tag="beef">Beef ' + getCost.call(beef) + '</ul><ul tag="pork">Pork ' + getCost.call(pork) + '</ul></li>');

function getCost() {
    return 'is ' + this.Cost;
}



// Please comment out the sections as you go along.