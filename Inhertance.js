class User{
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`USRNAME is ${this.username}`)
    }
}

class Teacher extends User{

    constructor (username,email, password){
        super(username)
        this.email=email
        this.password = password

    }
    addCourse(){
        console.log(`Teacher ${this.username} added a course`)
    }
}

const chai = new Teacher("chai","chai@email.com", '123');
console.log(chai);