
// arrow function in js 
// write a program find addtion of two number in js

const sum = (a,b) => (a+b)

console.log(sum(10,20));

// In javaScript here we can write function in different ways

// Second way
// named fn  function
function sum1(a,b){
    console.log(a+b);

}
sum1(5,10); // call  function 

// Regular function 


const add = function ( a,b ) {
    return a+b;
}
console.log( "Sum of two number is "+add(10,5));

// arrow function
const add1= (a,b) =>{
    return a+b;
}
console.log( "Sum of two number is "+add1(10,20));

// more consice way to write arrow function
const add3 = ( x , y ) => x + y;
const result1 = add3( 20 , 5);

console.log(result1);
