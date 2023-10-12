//.................. Class Constructor ...................//



class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("Ashish", "Ashish@google.com", "Rockabye123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("Kandel", "Kandel@microsoft.com", "Joonon123")

// console.log(Kandel.encryptPassword());
// console.log(Kandel.changeUsername());