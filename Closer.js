// What is a Closure?
// A closure is a function that retains access to its lexical scope,
//  meaning it can remember and access variables from its outer scope even after the outer function has completed execution.

const { isInt16Array } = require("util/types");

// How Does it Work?
// When a function is defined inside another function, it forms a closure. The inner function maintains a reference to the outer function’s variables, creating a persistent scope chain. This allows the inner function to access and manipulate the outer 
// function's variables even after the outer function has returned.


function sum(){

     let sum = 0 ;
    
    console.log('this outer function');
     return function totalsum (val1, val2){
        sum  = val1 +val2;
        return sum;
     }
   
    

}

const result = sum();
console.log(result(1,5));
// console.log(sum());


// function revstring (str){

//     return str.split("").reverse(). join("");
// }

// console.log(revstring("helow"));