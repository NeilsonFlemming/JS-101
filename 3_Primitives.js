let name = 'Neilson'; //string literal
let age =30; //number literal
let isApproved = true; //boolean literal
let firstName; //undefined
let lastName = null; //undefined and null are different - null is used when you want to clear the value of a variable

//orginally string - changed to number
console.log(name);
console.log(typeof(name));
name = 1;
console.log(name);
console.log(typeof(name));

// all numbers are considered numbers including decimals
console.log(name);
console.log(typeof(name));
name = 22.2;
console.log(name);
console.log(typeof(name));

// undefined becuase it was set to nothing
console.log(firstName);
console.log(typeof(firstName));

// notice that null is not considered undefined and is considered an object
console.log(lastName);
console.log(typeof(lastName));