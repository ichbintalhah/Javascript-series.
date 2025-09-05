let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString()); 
console.log(mydate.toISOString());
console.log(mydate.toUTCString());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(typeof mydate);

let myCreatedDate = new Date(2025, 8, 6)
console.log(myCreatedDate.toDateString());

////////timestamp////////

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());    
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getDay()); // it returns the day of the week 0-6 (0 means Sunday and 6 means Saturday)

console.log(newDate.toLocaleString("default", { weekday: "long" })); // it returns the full name of the day
console.log(newDate.toLocaleString("default", { weekday: "short" })); // it returns the short name of the day
console.log(newDate.toLocaleString("default", { month: "long" })); // it returns the full name of the month
console.log(newDate.toLocaleString("default", { month: "short" })); // it returns the short name of the month
