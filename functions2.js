// rest or spread operator
//normal scenario
function sum(num1){
    return num1
}
console.log(sum(1,2,3,4,5));
//using spread operator
function sum1(...num1){
    return num1
}
console.log(sum1(1,2,3,4,5));
//what if we have val1, val2 and then rest of the values
function sum2(val1, val2, ...num1){
    return num1
}  
console.log(sum2(1,2,3,4,5));
// function with object as a parameter

const user ={
    name: "Talha",
    age: 21,
}
function userDetails(anyobject){
    return `the name of the user is ${anyobject.name} and age is ${anyobject.age}`
}
console.log(userDetails(user));

//passing arrays as an argument
const myArray = [200,400,100,800];

function arraysum(getarray){
    return getarray[0] + getarray[1] + getarray[2] + getarray[3];
}
console.log(arraysum(myArray));