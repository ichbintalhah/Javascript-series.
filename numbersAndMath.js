const score = 100;
let balance = new Number(400); 
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num2 = 42.56789;
console.log(num2.toPrecision(5)); // the precision method rounds the number to the specified length also it starts from the left before decimal point not after decimal point


const num3 = 1000000;
console.log(num3.toLocaleString("en-PK")); // it adds commas according to the country you specified in the parameter

//////////////////////MATHS///////////////////////
console.log(Math.abs(-55)); // it returns the absolute value of the number
console.log(Math.round(4.6)); // it rounds the number to the nearest integer
console.log(Math.ceil(4.1)); // it rounds the number to the next integer
console.log(Math.floor(4.9)); // it rounds the number to the previous integer
console.log(Math.min(0,150,30,20,-8,-200)); // it returns the minimum value from the given numbers
console.log(Math.random()); // it returns a random number between 0 and 1
console.log((Math.random()*10) + 1); // it returns a random number between 0 and 10
 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it returns a random number between the given min and max values including both
