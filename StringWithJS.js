
// String : String is a sequence of characters that store in single variable 

// Deceleration of string
const str = ( " this is string variable ");
// or 
const str2 = ' This is string variable ';
// or 
const str3 = "This is string variable ";
// or 

console.log(str);

// String Constructor

const str4 = new String('Create String with String Constructor '); 
console.log(str4);

// find length of string 
let len = str4.length;
console.log(len);
console.log('\n ')

// conversion of string 
 let res1 = str4.toUpperCase();
 console.log(res1);
 let res2 = str4.toLowerCase();
 console.log(res2);


// string concatenation
let var1 = 'Java'; 
  
let var2 = 'Script'; 
  
let result = var1 + var2; 
  
console.log("Concatenated String: " + result);


// Tempalte string
// It allows to write in multiple Lines   
const str5 = ` THis 
  is
  template
  string 
  variable`

console.log(str5);
