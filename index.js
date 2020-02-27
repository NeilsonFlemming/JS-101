// This is my first JS code
console.log('Hello World');

//setting variables
//names should be meaningful
//String Literal
let firstName = 'Neilson';
let lastName = 'Flemming';
//Number Literal
let age =29;
//Boolean Literal
let isApproved = true;
//not assigned
let selectedColor = null;

//print
console.log(firstName,lastName);
console.log(age,isApproved)

// when using const (constant) you cannot re-assign the value
const interestRate = 1;
console.log(interestRate);


let person = {
    firstName : 'Neilson',
    lastName : 'Flemming',
    age : 29
};

console.log(person);
console.log(person.firstName);
console.log(person['lastName']);


let selectedColors = ['red','blue'];
selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors[0]);

function myFunction(firstName,lastName) {
    console.log('My First Function. My first name is ' + firstName);
    console.log('My First Function. My Last name is ' + lastName);
}

myFunction('Neilson','Flemming');

function square(number) {
    squareRoot = number * number;
    return squareRoot
}

console.log(square(16))

let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x**y);

console.log(++x)
console.log (x);

console.log(--x)
console.log (x);

let nums = 10;
nums++;
nums = nums+5;
nums +=5;