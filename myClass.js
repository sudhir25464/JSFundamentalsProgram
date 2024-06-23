class User {
    constructor (name, email,password){
        this.name =name;
        this.email = email;
        this.password = 123;
    }

    encryptedPassword(){

        return  `${this.password}abc`
    }
}

const person1 = new User("user1", 'User@gmail.com','83983');

console.log(person1.encryptedPassword());
