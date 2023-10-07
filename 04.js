       // Arrays

//1. Arrays are resizable in JS.
//2. Arrays can hold elements of multiple data types.
//3. Arrays in JS create shallow copies rather than deep copies meaning that if you     copy an array and change the copy, the original array will also change. (reference based)

// let myArray = [1,2,3,'rich',true];
// console.log(myArray); // [1,2,3,'rich',true]
// console.log(myArray[0]); // 1

// .push(element) adds an element to the end of the array and returns the new length of the array.
// .pop() removes the last element of the array and returns the element.

// .unshift(element) adds an element to the beginning of the array and returns the new length of the array.

// .join() joins all the elements of the array into a string and returns the string.


// console.log(myArray.length); // 5 
// console.log(myArray.push("Js")); // 6
// console.log(myArray); // [1,2,3,'rich',true,'Js']
// console.log(myArray.pop()); // Js
// console.log(myArray); // [1,2,3,'rich',true]

// console.log(myArray.unshift("Js")); // 6
// console.log(myArray); // ['Js',1,2,3,'rich',true]

// console.log(myArray.includes("rich")); // true

// console.log(myArray.join()); // Js,1,2,3,rich,true

// console.log(myArray.slice(1,3)); // [1,2]
       // .slice(start,end) returns a shallow copy of the array from start to end-1.
    
 
// see difference between splice and slice.



// let gods = ['Ram', 'Shiva', 'Krishna'];
// let goddesses = ['Sita', 'Parvati', 'Radha'];
// console.log(divineBeings = gods.concat(goddesses));  
       //[ 'Ram', 'Shiva', 'Krishna', 'Sita', 'Parvati', 'Radha' ]

// console.log(gods.push(goddesses));   // 4
// console.log(gods);  // [ 'Ram', 'Shiva', 'Krishna', [ 'Sita', 'Parvati', 'Radha' ] ]
                            // adds the array as an element to the end of the array.

// console.log(gods.push('SuryaDev', 'HanumanJi'));  // 6
// console.log(gods);  // [ 'Ram', 'Shiva', 'Krishna', [ 'Sita', 'Parvati', 'Radha' ], 'SuryaDev', 'HanumanJi' ]

// console.log(gods[3]);  // [ 'Sita', 'Parvati', 'Radha' ]])
// goddesses.push('Lakshmi','Durga', 'Saraswati');
// console.log(gods); 
     // ['Ram','Shiva','Krishna',[ 'Sita', 'Parvati', 'Radha', 'Lakshmi', 'Durga', 'Saraswati' ],'SuryaDev','HanumanJi']

// console.log(gods[3][2]);  // Radha


//   Spread Operator (...)

// const allDivineBeings = [...gods, ...goddesses];
// console.log(allDivineBeings); 
    // ['Ram','Shiva','Krishna',[ 'Sita', 'Parvati', 'Radha', 'Lakshmi', 'Durga', 'Saraswati' ],'SuryaDev','HanumanJi','Sita','Parvati','Radha','Lakshmi','Durga','Saraswati']


console.log(Array.isArray('rich'));  // false
console.log(Array.from('rich'));  // [ 'r', 'i', 'c', 'h' ]
console.log(Array.from('rich').reverse());  // [ 'h', 'c', 'i', 'r' ]
console.log(Array.from({name : 'programmiz'}));  // []
     // returns an empty array because the object is not iterable. (gives the desirable output when terated though either a key or value.)

