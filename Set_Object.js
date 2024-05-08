// Set : Set is collection of unique value.

// Declered set object 

const  series = new Set();

series.add(10);
series.add(20);
series.add(30);
series.add(40);
series.add(50);
series.add(10);

console.log(series);
// check size of set
console.log(series.size);

// search element in set

console.log(series.has(40)); // true
console.log(series.has(60)); // false
// delete elemet from set
console.log(series.delete(10));
console.log(series);

// Filter Dublictae value from Arrya

let array = [2,3,4,5,6,3,34,6,6,600];

console.log(array);

let newArray =new Set(array);
let  uniqueArrayvalue  = [...newArray];
console.log(uniqueArrayvalue);