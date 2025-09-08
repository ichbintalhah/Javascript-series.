//singleton object
//object.create
// object literals
const mysym = Symbol("key1")
const jsUser = {
    name: "Talha",
    "full name": "Muhammad Talha",
    age: 21,
    mysym: "myvalue",
    location: "Lahore",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    email: "talha@gmail.com"
}
jsUser.email = "talha1@gmail.com"
console.log(jsUser);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// Object.freeze(jsUser); // makes the object immutable (cannot add, delete, or modify properties)
console.log(jsUser.mysym); // wrong way to access symbol property
console.log(jsUser[mysym]); // correct way to access symbol property
console.log(typeof mysym);
console.log(jsUser.email);

jsUser.greeting = function() { // adding a method to the object
    console.log("Hello JS User");
}
jsUser.greeting2 = function() { // adding a method to the object
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting); // prints the function definition
console.log(Object.keys(jsUser)); // returns an array of the object's own property names
jsUser.greeting(); // calling the method
jsUser.greeting2(); // calling the method


