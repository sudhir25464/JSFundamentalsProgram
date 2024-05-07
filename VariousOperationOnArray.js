
// Various Basic operations on JavaScript Array

 
 let Data = new Array(10, 20, 30, 40, 50, 60);
 // access first elemet of array
 console.log(Data[0]);
 
 // Access 3rd element of array
 console.log(Data[2]);
 
 // Access 5th element of array
 console.log(Data[4]);

  // Access Last elemet of array
  console.log(Data[Data.length - 1]);

  // access complete  array

  console.log(Data);
 
  // modify in Array
  Data[0] = 100;
  console.log(Data);

//   Adding Elements to the Array

//   Elements can be added to the array using methods like push() and unshift().
 let courses = ['BCA', 'B.TECH', 'MCA', 'MBA'];
 console.log(courses);
// Push method add elements to the  array in  Last
courses.push('M.tech');
console.log(courses);

// Unshift method add elements to the  array in  First
courses.unshift('Business Program');
console.log(courses);

// Removing Elements from an Array
// Remove elements using methods like pop(), shift(), or splice().
// pop() : remove last element from array
// shift() : remove first element from array
// splice() : remove multiple elements  according to range
let number = [1,2, 3,4, 5,6,7,8,9,10];
console.log(number);

let removeLastElement= number.pop();
console.log(number);

let RemoveFirstElement = number.shift();
console.log(number);

let numbers = [1,2, 3,4, 5,6,7,8,9,10];  
console.log("Org Array is  \n " + numbers);

let removeMutlipeElements = numbers.splice(0,3);
console.log(numbers)
let removeMutlipeElements1 = numbers.splice(0,5);
console.log(numbers)

// get length of Array
let num= [1,2, 3,4, 5,6,7,8,9,10];
let len = num.length;
console.log(len);
// decrease length of array
num.length = 7;
console.log(num.length);
console.log(num);

num.length = 12;
console.log(num);

let digits = [1,2, 3,4, 5,6,7,8,9,10];

for(let i =0; i<digits.length; i++){
    console.log(digits[i]);
}


// use forEachLopp
courses.forEach(function myfunction(elements){
    console.log(elements);
})

let arr1 = ['ram', 'shayam', 'Sohan'];
let arr2 = ['Gita', 'Sita', 'Neha'];

let concateArry = arr1.concat(arr2);
console.log(concateArry);

console.log(concateArry.toString());
console.log(typeof(concateArry.toString()));