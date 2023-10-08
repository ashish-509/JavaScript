//.................Control Flow in Js...............//

// let ageOfRam = 20;
// let ageOfShyam = 14;

// function checkAge(age, name){
//     if(age>=18){
//         console.log(`${name} is eligible to vote.`);
//     }else if(age<18){
//         console.log(`${name} is not eligible to vote.`);
//     }
//     else{
//         console.log("Please provide valid age.");
//     }
// }

// checkAge(ageOfRam, "Ram");      // Ram is eligible to vote.
// checkAge(ageOfShyam, "Shyam");  // Shyam is not eligible to vote.
// checkAge("abc", "abc");         // Please provide valid age.



let monthNo = 6;

switch(monthNo){

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;
    
    default:
        // console.log("The month does not lie in first quarter of the year.");
        break;
}



//...............Truthy and Falsy values...............//

// 1. 0, -0, null, false, NaN, undefined, "", and 0n (in case of BigInt) are falsy values.
 
// 2. Everything else is truthy.

// ..........confusing parts : ............//
//  "0" , 'false', " ", [], {}, function(){}  - are truthy values.



//     Nullish Coalescing Operator (??)    :   null , undefined    //

// ?? operator is used to check if the value is (prevent value from being) null or undefined.

let val1;
val1 = 5 ?? 10;
// console.log(val1);      // 5

val1 = 0 ?? 10;
// console.log(val1);      // 0

val1 = null ?? 10;
// console.log(val1);      // 10

val1 = undefined ?? 10;
// console.log(val1);      // 10


//.............Ternary Operator.............//

//  condition ? true : false

let age = 20;
let isEligible = age>=18 ? true : false;


//.............Loops (Iteration).............//

// 1. for loop : 
// for(initialization; condition; increment/decrement){}

for (let i = 0; i < 10; i++) {
    // console.log(i);
}


// 2. while loop :
// while(condition){
    // statements
    // increment/decrement
//}



// 3. do-while loop :
/*

do{
    // statements

    // increment/decrement
} while(condition);

*/

//////////////////////////  Higher-order Loops  //////////////////////////

// 4. for-in loop : ...mostly used for objects

const greetings = "Hello World";
for(let i in greetings){
    // console.log(greetings[i]);
}


// 5. for-of loop :

const greetings2 = "Hello World";
for(let i of greetings2){
    // console.log(i);
}


// 6. forEach loop : ...mostly used for arrays

const numbers1 = [1, 2, 3, 4, 5];

// Using forEach to print each element
numbers1.forEach((number) => {
//   console.log(number);
});



// .map() : creates a new array with the results of calling a function for every array element.


const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Using map to double each number in the array
const doubledNumbers = numbers.map((num) => num * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




// .filter() : creates a new array with array elements that passes a test. 

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array of even numbers
const evenNumbers = numbers3.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]



// .reduce() : reduces the array to a single value.

const numbers4 = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers in the array
const sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

