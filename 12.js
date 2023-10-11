// ................... Promises in JS ...........................//

// The Promise object represents the eventual completion (or failure) of an     asynchronous operation and it's resulting value.

// Promises future ma gayera complete hunxa...
// Promises are of 3 types.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// go through above link for detail...



// Creating promise...

const promiseOne = new Promise (function (resolve, reject){
    // Do async tasks such as : 
    // DB calls, cryptography, network
    setTimeout (function(){
        console.log('Async task is complete.');
        resolve();  // when this line is executed then only the line no. 29 ( .then() ) is executed.
    }, 1000)
})

 // .then() has direct connection with resolve.

 //Conduming Promise...
 
 promiseOne.then(function(){
    console.log("Promise consumed.");
 })


// The above task can also be done in following way :



  new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
  }).then(function(){
    console.log('Async 2 resolved.');
  })




  const promiseThree = new Promise (function (resolve, reject){
    setTimeout(function(){
        resolve({userName : "Ashish", email : "ashish@goofle.com"})
    },1000)
  })

  promiseThree.then(function(user){
    console.log(user);  // { userName: 'Ashish', email: 'ashish@goofle.com' }
        // argument user gets the parameter passed in resolve().
  })



//When there is error.


  const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;   //When there is error.
        if (!error){
            resolve({userName : "Ashish", email : "ashish@goofle.com"})
        }
        else{
            reject("ERROR: Something went wrong.");
        }
    },1000)
  })

  promiseFour.then((user) => {
    console.log(user);
    return user.userName;
  }).then((userName) => {
    console.log(userName);
  }).catch(function(error){
    console.log(error);
  })






//When there is NO error.



  const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;   //When there is NO error.
        if (!error){
            resolve({userName : "Ashish", email : "ashish@goofle.com"})
        }
        else{
            reject("ERROR: Something went wrong.");
        }
    },1000)
  })

  promiseFive.then((user) => {
    console.log(user);
    return user.userName;
  }).then((userName) => {
    console.log(userName);
  }).catch(function(error){
    console.log(error);
  })





// Using .finally()

  const promiseSix = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false;   //When there is NO error.
        if (!error){
            resolve({userName : "Ashish", email : "ashish@goofle.com"})
        }
        else{
            reject("ERROR: Something went wrong.");
        }
    },1000)
  })

  promiseSix.then((user) => {
    console.log(user);
    return user.userName;
  }).then((userName) => {
    console.log(userName);
  }).catch(function(error){
    console.log(error);
  }).finally(() => console.log("The promise is either resolved or rejected."));






const promiseSeven = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({userName : "Ash", email : "ash@microsoft.com"})
        }
        else{
            reject("ERROR: An error has occured.");
        }
    },1000)
  })

async function consumePromiseSeven(){
    try{
        const response = await promiseSeven;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseSeven();






// async function getAllData (){
//     try{
//         const response = await fetch('https://api.github.com/users/ashish-509');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch{
//         console.log("E: ", error);
//     }
// }

// getAllData(); 






// The above task can also be done as:

fetch('https://api.github.com/users/ashish-509')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
