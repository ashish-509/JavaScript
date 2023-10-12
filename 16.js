//............... Inheritance ..............//


class User {
    constructor (username) {
        this.username = username;
    }

    logMe () {
        console.log(`Username is : ${this.username}`);
    }
}



const Ashish = new User ("Ashish");
Ashish.logMe();


class Teacher extends User {
    constructor (username, email, password) {
        super (username);
        this.email = email;
        this.password = password;
    }

    addCourse (){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const User1 = new Teacher ("Duniya", 'duniya@gmail.com', 'duniya123');
User1.addCourse();




User1.logMe();
const Ash = new User("Ash");

Ash.logMe();

console.log(User1 === Ash);
console.log(User1 === User);

console.log(User1 instanceof User);

