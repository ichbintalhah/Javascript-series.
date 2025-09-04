// two types of memory stack and heap
// primitive data types are stored in stack
// non-primitive data types are stored in heap


// WHENEVER THE STACK MEMORY IS USED YOU GET THE COPY OF THE VARIABLE YOU USED
// BUT WHENEVER THE HEAP MEMORY IS USED YOU GET THE REFERENCE OF THE VARIABLE YOU USED

// STACK EXAMPLE

let num1 = 5;
let num2 = num1; 
num2 = 10;
console.log(num1); // here num1 will be 5 because it is stored in stack memory and when we assigned num1 to num2 it created a copy of num1 in num2
console.log(num2); // here num2 will be 10 because we changed the value of num2

// HEAP EXAMPLE
let user1 = {
    name: "Talha",
    email: "talha@gmail.com"
}
let user2 = user1; // here user2 is getting the reference of user1
user2.email = "uzair@gmail.com"; // here we are changing the email of user2
console.log(user1.email);  
console.log(user2.email); // now both user1 and user2 email will be uzair@gmail.com thats because both are pointing to the same reference in heap memory"
