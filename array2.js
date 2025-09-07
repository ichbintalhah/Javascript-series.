const marvelHeroes = ["Spiderman", "Ironman", "Thor", "Hulk"];
const dcHeroes = ["Batman", "Superman", "flash"];

// marvelHeroes.push(dcHeroes); // adds the entire dcHeroes array as a single element at the end of marvelHeroes
// console.log(marvelHeroes);
// console.log(marvelHeroes[4][1]); // accessing "Superman" from the nested dcHeroes array

let concat = marvelHeroes.concat(dcHeroes); // merges dcHeroes into marvelHeroes and returns a new array
console.log(concat); // original marvelHeroes remains unchanged
// heres another way to merge two arrays that is the spread operator

let allHeroes = [...marvelHeroes, ...dcHeroes]; // spreads the elements of both arrays into a new array
console.log(allHeroes);
const anotherarray = [1,2,3,[4,5],[6,7,8],9];
const realarray = anotherarray.flat(Infinity); // flattens the array by one level
console.log(realarray);
console.log(Array.isArray("TALHA"));
console.log(Array.from("TALHA")); // converts a string into an array of characters
console.log(Array.from({name: "TALHA"})); // converts an object into an array (only enumerable properties)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // creates a new array from the provided arguments

