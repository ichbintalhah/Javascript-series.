function one(){
    const username = "Talha";
    function two(){
        const website = "www.google.com";
        console.log(username);
        console.log(website);
    }
    // console.log(website); // not accessible
    two();
}
// one()

if (true) {
  const username = "Talha";
  if (username === "Talha") {
    const website = "www.google.com";
    console.log(username + " " + website);
   console.log(website);
    
  }  
//   console.log(website);// not accessible
  console.log(username);
}
// console.log(username); // not accessible

////////intresting example/////////
console.log(addone(5)); // 6
function addone(num){
    return num + 1;
}
console.log((addtwo(5)));  // it will give error if we use function expression before initialization know that theres a difference between function declaration and function expression this is function expression through variable const
const num2 = function addtwo(num){
    return num + 2;
}