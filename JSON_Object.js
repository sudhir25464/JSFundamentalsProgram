
// JSON object mainly use to interchanged the formate that is easy for humans to read and write and easy for machines to parse and generate.

const { Console } = require("console");

// It is almost same as Object  and its properties .
// some different in acceesing of JSON object 
let objetct_name = {
    "key1": "value1",
}
 console.log(objetct_name.key1);

 let person = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };

//   Console.log(person); if here you will access object directly it will be give error 
// access compete JSON object
let a;
for (a in person) {
    // Accessing object in looping
    // using bracket notation
    console.log(person[a]);
}
// Access element of object  seperately

let i = console.log(person.age);
console.log(typeof(person)); // check type og object

// convert JSON to text object 

let text = JSON.stringify(person);
console.log(text);
console.log(typeof(text));

// convert text object to JSON object(person);
console.log(text);
console.log(typeof(text));

