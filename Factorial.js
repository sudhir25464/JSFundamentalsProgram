
// find factorial using arrow function with argument

const factorial = (n) => {
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log("Factorial is  "+factorial(5));

// Arrow fuction 

const add = function ( a,b ) {
    return a+b;
}
console.log(add(10,5));
