//
// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after its creation. This is done to create a new scope and avoid polluting the global namespace with variables. IIFEs are useful for encapsulating code and creating
//  module-like structures before the advent of ES6 modules.

(function output(){
    console.log("Hello World");
})();

// with arroe function 

((name)=>{
    console.log(`Hellow world 2 ${name}`)
})('sudhir kumar')
