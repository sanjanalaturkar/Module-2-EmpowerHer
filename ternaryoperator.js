const isEven = n => n % 2 === 0;


const result = marks >= 35 ? "Pass" : "Fail";

const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);


console.log(isEven(4));    
console.log(isEven(7));   

let marks = 40;
console.log(result);      

greet("Sanjana");         
greet();                  
