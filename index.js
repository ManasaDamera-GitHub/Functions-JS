// question - 1
function sumOfNumbers(a, b) {
    return (`The sum of two numbers is ${a + b}`);
}
console.log(sumOfNumbers(12, 28));

// Question 2
function string(text) {
    console.log(text.toUpperCase());
}
string("javascript is awesome");

// Question 3
function one(a) {
    console.log(a);
}
one();

// Question 4
function emptyArray(Array) {
    if (Array.length == 0) {
        console.log(`Array is empty `);
    }
    else {
        console.log(`Array is not empty ${Array}`);
    }
}
emptyArray([]);
emptyArray([1, 2, 3]);

// Question 5
function difference(a, b) {
    return (`The difference of two numbers is ${a - b}`);
}
var res = difference(30, 10);
console.log(res);

// Question 6
function greeting(name, age) {
    return (`Hello, ${name} ! You are ${age} years old`);
}
var res = greeting("john", 25);
console.log(res);
// Question 7
function isEven(a) {
    if (a % 2 == 0) {
        return `${a} is true`;
    }
    else {
        return `${a} is false`;
    }
}
var result = isEven(21);
console.log(result);

