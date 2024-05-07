
// Currying  in javaScript transfroms a function with multiple arguments into a nested series of function , each taking a single argument.
// Advantages:
// Reusability 
// Modularity and Specialization

// Exemple of currrying function

function multiply(a,b){   // It is regular function
    return a*b;
}

// Currying function
function curriedMultiply(a){
    return function (b){
        return a *b;
    }
}
const double = curriedMultiply(10);
console.log(double(5)); // OP : 50

// calculate squire of first number  and sum of two numbers

function SumAndsquire (a){
    if(a>0){
        console.log ("Squire of first number is : "+(a*a));
    }
   
    return function(b){
        return a+b;
    }

}

const  sum = SumAndsquire(20);
console.log(sum);
console.log(sum(20));