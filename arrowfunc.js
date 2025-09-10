const user ={
    username: "Talha",
    id: 1,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        // console.log(this);
        
    }

}
// user.welcomeMessage();
// user.username = "New Talha";
// user.welcomeMessage();

// console.log(this); // this refers to the global object in this case window object in browser and in node its an empty object

function one(){
    const username = "Talha";
    console.log(this.username); // undefined because this refers to the global object in this case window object in browser and in node its an empty object
    console.log(this); // this refers to the global object in this case window object in browser and in node its an empty object
    
}
// one();

const chaye = () =>{
    let username = "Chaye";
    // console.log(this.username);
    
    // console.log(this); // this refers to the global object in this case window object in browser and in node its an empty object
}
chaye();
const addthree = (num1, num2) =>{
    return num1 + num2;
}
console.log(addthree(4,5))

// implicit return
const addfour = (num1, num2) => num1 + num2;
// const addfour = (num1, num2) => (num1 + num2); // this also works note that these are parenthesis not curly braces in curly braces we always need to use return keyword but not in parenthesis
// const addfour = (num1, num2) => ({username: "Talha"})
console.log(addfour(4,5));