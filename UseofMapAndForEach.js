
// use map() Methods in array 
// If you want to modify in array and create a new array with modify values,

// Exemple
 let arr1= [2,4,6,8];
 let newArray1 = arr1.map((e)=> e*10);
 console.log(newArray1);
 //op 20,40,60,80
 console.log(arr1); //OP: 2,4,6,8

 // uUse of forEach() Method 
 // It is used to perform operations on Array without creating new Array

 // for example
  let arr2 = [1,3,5,7,9];
  arr2.forEach((e)=> console.log(e*10));
  