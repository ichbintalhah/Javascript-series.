// immediately invoked function expression

(function one(){
    console.log("DB CONNECTED")
})();

(() => {
   console.log("DBCONNECTED TWO") 
})(); // this will work only if theres a semi colon at the end of the first function

((name) => {
   console.log(`DBCONNECTED TWO, HELLO, ${name}`) 
})("Talha"); // thats how we pass arguments

// named iife
(function block(){
    console.log("im a block");
    
})()