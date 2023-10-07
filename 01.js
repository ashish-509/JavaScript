// "use strict";   
/* always use this to avoid errors in the program.
                   it treats all Js code as new version of Js. */


const accountId =  '02';      // can not be changed (or re-assigned) in the program.
let accountName = 'Ashish';   // can be changed (or re-assigned) in the program.
var accountAge =  14;         // (old way) generally not used due to its global scope.
accountCity = 'Pokhara';      // (old way) generally not used due to its global scope.
let accountState;       // undefined 

// accountId = '0987654321';   
accountName = 'Ashlesha';     
accountAge =  12;
accountCity = 'Mumbai';

console.table({accountName, accountCity, accountAge, accountId,accountState});//remember console.table({})

/*  alert('Hello World!'); // can't be used in node.js (it is used in browser)   */


/*     

number : 2 to the power 53
bigint 
string : "" or ''
boolean : true or false
null : empty value
undefined : variable declared but not assigned
symbol : unique identifier
object : key-value pair

*/

console.log (typeof "User");         // string
console.log (typeof 123);            // number
console.log (typeof true);           // boolean
console.log (typeof undefined);      // undefined
console.log (typeof null);           // object
console.log (typeof {name: "Ashish", age: 14});  // object........key value pair
console.log (typeof [1,2,3,4,5]);    // object
console.log (typeof function(){});   // function



/*

// data types in JS

1. Primitive data types :
    -> call by value  (changes made in copies of data)
    -> string, number, boolean, null, undefined, symbol, bigint



2. Non-primitive data types
    -> call by reference (changes made in original data)
    -> object, array, function, date, etc.

*/


// -> Symbols are used to create unique identifiers for objects.  Eg:

let id1 = Symbol("id");
console.log(id1);  // Symbol(id)
console.log(typeof id1);  // symbol


let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id == anotherId);  // false   .......as symbols are unique identifiers.




// Javascript is a dynamically typed language as it automatically assigns data types to variables.