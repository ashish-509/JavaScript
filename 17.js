class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // createId(){  // external objects can access the functions.
    //     return `123`
    // }


    static createId(){ // static keyword prevents accessing of data by outer objects.
        return `123`
    }

}

const Ashish = new User("Ashish")
console.log(Ashish.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());