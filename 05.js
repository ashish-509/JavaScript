//............Object in JS.............//

// Objescts can be created in 2 ways:

// 1. Object literals      ->  let obj = {};

// 2. Constructor function ->  let obj = new Object();   -> Object singleton banxa.

// let symbol = Symbol("Key1");

// let user1 = {
//     name: "Ashish",
//     age: 14,
//     [symbol]: "key123",
//     email: "ashish@google.com",
//     isLoggedIn: true
// }

// console.log(user1.name);    // Ashish........Not recommended way.

// console.log(user1["name"]); // Ashish........Recommended way.

// console.log(user1[symbol]);   // key123
// console.log(user1["symbol"]); // undefined

// user1.name = "Ashish Kandel";
// console.log(user1.name);    // Ashish Kandel

// Object.freeze(user1);   // user1 object is now immutable.

// user1.name = "Ashlesha";
// console.log(user1.name); // Ashish Kandel....not changed.



//............Desstructuring of Objects.............//



let course = {
    name: "React JS",
    price: 1000,
    description: "This is a course on React JS"
}

console.log(course.name);   // React JS

// the above code can be written as:

const { name, price, description } = course;
console.log(name);  // React JS
console.log(price); // 1000

// or for short hand notation:

const {description : desc} = course;
console.log(desc);  // This is a course on React JS



// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)