// object singleton
// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Talha";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const regularUser = {
    Email: "name@gmail.com",
    fullname: {
            firstname: "Muhammad",
            lastname: "Talha"
        }
    }
console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj33 = {obj1, obj2}; // this will create an object with two properties obj1 and obj2
const obj3 = {...obj1, ...obj2}; // spread operator to merge two objects
console.log(obj33);
console.log(obj3);
const obj333= Object.assign({},obj1, obj2); // merges obj2 into obj1
console.log(obj333);
const user = [
    {userid: 1,
    name: "Talha",
    email: "talha@gmail.com"
    },
    {userid: 2,
    name: "Ali",
    email: "ali@gmail.com"}
]
user[1].name;
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

