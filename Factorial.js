
// find factorial using arrow function with argument

const factorial = (n) => {
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

console.log("Factorial is  "+factorial(5));


