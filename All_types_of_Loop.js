// for loop : It used as Loop .It conatins three parts initialization, condition, ++/-- op

//Eg:

for (let i = 0; i <10; i++){
    console.log(i);
}
console.log("for loop end")

// While Loop: while loop execute block of code as long as specify condition is true 

// Eg:
let x=3;
while (x <10){
    console.log(x);
    x++;
}
console.log("While loop end");

// Do while Loop : do while loop is similar to while loop it execute at least one even those condtion is flase

//eg;
let y =5;
do{
console.log("Loop is executed : "+y);
}while(y>5);

// for in loop : for in loop is used to iterate over the property of an object 
//eg:

const person = {name:"sonu jha",  age:"25", city :"Banglore"}
const person2 = {"name":"sonu jha",  "age":"25", "city" :"Banglore"}


for (let key in person2){
    console.log(person2[key]);
}
//OP
// sonu jha
// 25
// Banglore
// FOR OF LOOP : is used the iterate the property of object , array ,string, map , set etc;
const numberseries = [2,4,6,8,10,1,4,3,7];

for (let num of numberseries){
 if(num%2==0){
    console.log(num);

 }   
}