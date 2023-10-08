// .....................Function in JS..................... //

function sayHello(name) {
    console.log(`Hello, ${name}`);  
}

// sayHello("Ashish");  // Hello, Ashish
// sayHello();          // Hello, undefined 

// Parameters are the variables that we define in the function definition.
// Arguments are the values that we pass to the function when we call it.



// Sometimes, in making an e-commerse website, we need to calculate the total price of the products and you may be unaware of no. of products added in the cart. For this use rest ( ... ) operator. Eg:

function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices)
        total += price;
    return total;
}

// console.log(calculateTotalPrice(10, 20, 30));  // 60


// reversing the string for fun...

// let word = "Hello World";
// let reverse = "";
// for (let i =word.length-1; i>=0; i--) {
//     reverse += (word[i]);
// }
// console.log(`The reverse of ${word} is ${reverse}`);



// .....................Scope in JS..................... //

// 1. Global Scope : Variables defined outside of a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.

// 2. Local Scope : Variables defined inside a function are local variables. They cannot be accessed outside of that function.

// child elements can access parent elements but parent elements cannot access child elements.
// scope in JS is defined by curly braces ( {} ).

// let and const are preferred methods for declaring variables due to their block (local) scope.
// var is not preferred due to its global scope.




// console.log(add1 (5));   // 6
function add1 (num){
    return num + 1;
}
// console.log(add1 (5));   // 6


// console.log(add2 (5));   // error.....ReferenceError: Cannot access 'add2' before initialization
let add2 = function (num) {
    return num + 2;
}
// console.log(add2 (5));   // 7





//...............Use of this keyword in JS...............//

//this keyword is used to refer current context or current object. Eg:

const user = {
    userName: "Ashish",
    price: 1000,
    welcomeMessage: function () {
        console.log(`Welcome ${this.userName} to your new course!`);
    }   
};

// user.welcomeMessage();  // Welcome Ashish to your new course!

user.userName = "Ashish Kandel";
// user.welcomeMessage();  // Welcome Ashish Kandel to your new course!


//.............Normal Function in JS.............//
let greetings = function () {
    console.log("Namaste");
}
// greetings();  // Namaste

//.............Arrow Function in JS.............//

let greeting = () => {
    console.log("Namaste");
}
// greeting();  // Namaste

// console.log(greeting);  // [Function: greeting]


let greet = () => console.log("Namaste");
// console.log(greet);  // [Function: greet]



const add = (a, b) => {
    return a + b;
}
console.log(add(5, 6));  // 11



// it is not necessary to use curly braces if there is only one statement in the function body.

const plus = (a, b) => a + b;
console.log(plus(5, 6));  // 11

// if you don't have curly braces, you can't use return keyword. It will return undefined.



//.............Immediately Invoked Function Expressions (IIFE).............//

// IIFE is a function that is executed right after it is created. It has two parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// IIFE is used to avoid the collision of function varibles with global variables....
               //global scope ko pollution hatauna


(function chai(){      // it is named IIFE
    console.log("The chai is ready!");         // The chai is ready!
})();

(function chai(name){      // it is named IIFE
    console.log(`${name}, the chai is ready!`);  // Ashish, the chai is ready!
})('Ashish');

((name) => {      // it is unnamed IIFE
    console.log(`${name}, the chai is ready!`);  // Ashish, the chai is ready!
})('Ashish');

