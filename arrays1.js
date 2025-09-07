const array = [0,1,2,3,4,5];
const heros = ["deadpool", "daredevil","penguin","ironman"];
const myArray = new Array(1,2,3,4,5); // another method to declare an array
// console.log(array);
// console.log(myArray);


///////////Array Methods//////////

array.push(6); // adds an element at the end of the array
array.pop(); // removes the last element
array.unshift(10); // adds an element at the beginning of the array
array.shift(); // removes the first element


const newArr = array.join(); // converts array to string
console.log(newArr, typeof newArr);

console.log(array);
console.log(array.includes(9));
console.log(array.indexOf(9));

console.log(array.slice(1,3)); // returns a new array from start index to end index (end index not included)
console.log("b" , array);
console.log(array.splice(1,3));// removes elements from an array and returns the removed elements as a new array
console.log("c", array);


