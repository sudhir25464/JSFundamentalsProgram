
// Array   :  Array is data structure that store multiple value in single variable

// In javascript there are two ways for deceleration of Array

// Array Literals and Array Constructor

// deceleration of Array
// syntax: let arrayName =[val1, val2,val3,....]

let Deatils =['Rohan', "25", 'Bihar'];
console.log(Deatils);


// SArray with constructor

// syntax: let arrayName = new Array(val1, val2,val3,....)

let names = new Array();  // this is Empty array

console.log(names);

let names1 = new Array('Rohan', "Shohan", 'Rama', 'Sahil', 'Rajan');
console.log(names1);

// access array elements

console.log(names1[0]);
console.log(names1[1]);
console.log(names1[2]);

console.log(names1[names1.length-1]); // its give tha last elemebt of Array

console.log(names1[names1.length-2]);


