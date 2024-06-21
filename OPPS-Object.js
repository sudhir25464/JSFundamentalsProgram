const person ={
    name :'sudhir kumar',
    age:21,
    city:'Patna',
    say : function (){

        // console.log(this);
        console.log('I am  fullstack developer')
    }
}

console.log(person.name);
person.say() 
// console.log(person.say());


function userDetails(userName, loginCount, isLogin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLogin = isLogin;

    this.getuser= function(){
            console.log(`welcome ${this.userName}`);
    }

   // return this
}

const user1 = new userDetails ('suhdir kr', 12, true);
const user2 = new userDetails ('hellow', 171, false);
console.log(user1);