
// Here IMP pont Syntax of object , Symbol
const mySym = Symbol("key");
const userDetails = {
    name :"sudhir",
    "full name ": "sudhir kumar",
    location: "Patna",
    [mySym] :"mykey1",
    email:"sudhir@1442@gmail.com",
    isLoggedIN: true,
}

console.log(userDetails.name);
console.log(userDetails["full name "]);

console.log(typeof userDetails [mySym]);

// freeze object 

userDetails.email = "examplesudhir@gmail.com";
Object.freeze(userDetails);
userDetails.email ="sudhirkumar@gmail.com";

console.log(userDetails.email);
console.log(userDetails);

// userDetails.greeting = function (){
//     console.log(`Hellow all users, ${this.name}`);
// }

// console.log(userDetails.greeting());

// other way to declerationof objects 
const tinderUser ={}

tinderUser.name ="ramu kumar";
tinderUser.id = 123;
tinderUser.state ="Delhi";

console.log(tinderUser);

// Advance way to Objects in Js // Nexted 
const regularUser = {
    email: "Ramujha@112.com",
    fullname:{
        userfullname:{
            firstName :"sudhir",
            lastName:"kumar"
        }
    }
}

console.log((regularUser.fullname));
console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

const obj3 = {...obj1, ...obj2};
// const obj3 = {obj1, obj2};
console.log(obj3);

// ARRAY OF OBJECTS
const user =[
    {
        id:"1",
        email:"s@gmal.com",
    },
    {
        f_name:"sudhir",
        l_name:"kumar",
    }
]

// Access array of object elements Here
console.log(user[0].email);

console.log(tinderUser);
// We can Access onle key or value of Object 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// OBJECT DESTRUCTORING 
const course = {
    courseId: "1001",
    courseName :"JavaScript",
    courseFree:3000
}

const {courseId: id,courseName} = course;
console.log(id);
console.log(courseName);

