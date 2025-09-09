function sayMyName() {
    console.log(`my name is Talha`);
}
// sayMyName; // this is the reference of the function
// sayMyName(); // this is the function call or function execution

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);  
}

// const result = addTwoNumbers(6,9); 
// console.log(result);// undefined because the function does not return anything

function addTwoNumbersReturn(num1, num2){
    return num1 + num2;
}
const result2 = addTwoNumbersReturn(6,9);
// console.log(result2); // 15
// one more way to return
function addNum(num1, num2){
    let result = num1 + num2;
    return result;
}
const result = addNum(1,68);
// console.log("result is", result)// 69

// another way to return
function add(num1, num2){
    return num1 + num2;
}
const result1 = add(4,5);
// console.log(result1);
function loginUserMessage(username = "Muhammad"){
    if(username === undefined){ 
     return "Please enter a username";}
    return `Hello ${username}, welcome back!`;
}
const message = loginUserMessage("Talha");
const message1 = loginUserMessage();
console.log(message);
console.log(message1);
