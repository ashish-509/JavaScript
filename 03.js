       //   String 

/*

const gameName  = new String ("GTA 5");   //it is the another way to declare string in JS.
console.log(gameName);                    // [String: 'GTA 5']............it is an object.
                            // try it in console to get various string methods, prototype.

console.log(gameName.length);       // 5
console.log(gameName.toLowerCase()); // gta 5
console.log(gameName);              // [String: 'GTA 5']
      // The above ,ethods are not making any changes in the original data (gameName) because it is a primitive data type thus uses stack memory for string.
    
log = console.log; // just for shortening the console.log() method.
log(gameName.length);       // 5


let myName = "    Ashish    Kandel    ";
console.log(myName);                  //     Ashish    Kandel    ..
console.log(myName.length);           // 24
console.log(myName.trim());           // Ashish    Kandel..
console.log(myName.trim().length);    // 16
//stringName.trim() removes the extra spaces at the beginning and end only.

console.log(myName.split(" A"));


*/



           // Numbers and Maths

// let score = 98;   // 98
// console.log(score);

// let num = new Number(96);
// console.log(num); // [Number: 96]...it is an object.
//                   // try it in console to get various properties and methods of Number.

// console.log(num.toFixed(2)); // 96.00....mostly used in e-commerce sites for calulating price.

// const num1 = 100000000;
// console.log(num1.toLocaleString());           // 100,000,000
// console.log(num1.toLocaleString("en-IN"));    // 10,00,00,000

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E);  // 2.718281828459045
// console.log(Math.round(2.4)); // 2
// console.log(Math.round(2.5)); // 3
// console.log(Math); // [Math: null prototype]...it is an object.
//                    // try it in console to get various properties and methods of Math.

// console.log(Math.floor(2.9)); // 2
// console.log(Math.ceil(2.1));  // 3

// console.log(Math.random()); // 0.9319318974098112 .......gives random number between 0 and 1.

// console.log(Math.abs(-5)); // 5


// let min = 1;
// let max = 1000;

// console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
                    // gives random number between min and max.

 

                    // Dates in JS
                  
console.log(Date());     // Sat Oct 07 2023 21:50:50 GMT+0545 (Nepal Time)
let today = new Date();
console.log(today); // 2023-10-07T16:03:39.019Z   ... gives the current date and time. 
console.log(today.toString());             // Sat Oct 07 2023 21:53:47 GMT+0545 (Nepal Time)
console.log(today.toLocaleString());       // 10/7/2023, 9:53:47 PM
console.log(today.toDateString());         // Sat Oct 07 2023

         // see mdn docs for more methods and properties of Date.



