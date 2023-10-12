//................... OOP in JS ....................//



// -> Object is a collection of properties (variables, constants) and methods (functions).

// Parts of OOP:
    // Object litral
    // - Constructor function
    // - Prototypes
    // - Classes
    // - Instances (new, this)


// 4 Pillars of OOP :
    // 1. Abstraction
    // 2. Encapsulation
    // 3. Inheritance
    // 4. Polymorphism

function User (userName, logInCount, isLoggedIn){
    this.userName = userName;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    return this;   // return explicitly nagare pani implicitly aafai return hunxa.
}

const user1 = new User("Ashish", 5, true);

// empty object (instance) is created when we use 'new' keyword.

console.log(user1);          // Try it's output.
console.log(user1.userName); // Ashish

