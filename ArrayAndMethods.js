// Array :An array in JavaScript is a special type of
//  object used to store multiple values in a
//  single variable. Arrays are useful for storing collections of data, such as lists of items. They can hold different types of data, including numbers, strings,
//  objects, and even other arrays.

const fruits =[ "apple", "orange", "Banana"];

const numbers = [10, 20, 30, 40 , 50 , 60 ,70 ];

// print  aarays  elements
console.log(numbers); 

// add methods

// push : add one or more elements to end of aaray and  return new array
numbers.push(40);
numbers.push("ram", "Shyam", 100)
console.log(numbers);

// unshift : add one or more elements to beggning of aaray and  return new array

numbers.unshift(1000,500);
console.log(numbers);

// REMOVE METHODS

//pop : remove last element from array 
numbers.pop();
console.log(numbers);

// shift : remove first element of array

const result = numbers.shift();
console.log(result);
// console.log(numbers.shift());
console.log(numbers);

// splice : remove multiple elements  according to range
console.log(numbers.splice(0,2));
console.log(numbers);


// find METHOD: Get the first element of array that satisfies condition;

console.log(numbers);
let c = numbers.find((num) => num%2==0);
console.log(c);

// Filter() :  Get an array of element that satisfies a condition

let filter_result = numbers.filter((num)=>{
    if (num%2 !== 0)
        return num;
})
console.log(filter_result);

// filter only intger values
const filter_integervalue = numbers.filter(value=> Number.isInteger(value));
console.log(filter_integervalue);


const multi_layer_array = [1,2,3,[3,4,],6,7,8,4[4,5,6]];
console.log(multi_layer_array.flat(Infinity));


// It converts string to array 
console.log(Array.from("sudhir"));
// splice :


// Create custom array 
// const customArray = {
//     array: [],
  
//     add(element) {
//       this.array.push(element);
//     },
  
//     get(index) {
//       if (index >= 0 && index < this.array.length) {
//         return this.array[index];
//       } else {
//         throw new Error("Index out of bounds");
//       }
//     }
//   };
  
//   customArray.add("Apple");
//   customArray.add("Banana");
  
//   console.log(customArray.get(0)); // Output: "Apple"
//   console.log(customArray.get(1)); // Output: "Banana"
  
//   console.log(customArray);
//   customArray.add("10,20,30");
//   console.log(customArray);
  


