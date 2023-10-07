/* 

let score =  123;
console.log(score);
console.log(typeof score);

    
//  let score = 133; 
        //redeclaring is not allowed although you can change the value of the variable.
    

score = "133abc";
console.log(score);        // 133abc
console.log(typeof score); // string

scoreInNumber = Number (score);  //converts string to number
   // data type of scoreInNumber is number but it's value becomes NaN (Not a Number)  

console.log(scoreInNumber);      // NaN  .....(Not a Number)
console.log(typeof scoreInNumber);  // number


*/





/*



let name = "Ashish";
let cast = "Kandel";
let age = 14;
let city = "Pokhara";

//             String Interpolation

let info = `${name + " " + cast} is a good boy of ${age} years residing in ${city}.`;
// Don't forget backticks ``  and  ${} for JS.

console.log(info); 
 


// Anything in the form of key : value pair enclosed in curly braces {} is an object. Eg:

let myInfo = {
    name : "Ashish",
    cast : "Kandel",
    age  : 14,
    city : "Pokhara",
    character : "good"
}

console.log(myInfo);  // { name: 'Ashish', cast: 'Kandel', age: 14, city: 'Pokhara', character: 'good' }


// Arrays are also objects used to store multiple values in a single variable. Eg : 

let myArray = [1,2,3,4,5,6,7,8,9,10];
let familyMembers = ["Ashlesha", "Aarav", "Shailu", "Abhinav"];
console.log(myArray);          // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(familyMembers);    // [ 'Ashlesha', 'Aarav', 'Shailu', 'Abhinav' ]
console.log(typeof myArray);   // object
let ho = console.log(familyMembers[0]); // Ashlesha


// Functions are also objects. Eg:

function displayName(familyMembers){
    console.log(`Hello, ${name} ${cast}`);
}

displayName(familyMembers); 




// typeOf
console.log(typeof 123);         // number
console.log(typeof "123");       // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
    
*/




/*
      Memory allocation in JS

        1. Stack memory (Used for primitive data types )
                        (changes made in copies of data)


        2. Heap memory  (Used for non-primitive data types)
                        (changes made in original data)


*/

