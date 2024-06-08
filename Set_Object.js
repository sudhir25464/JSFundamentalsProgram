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

const latter = new Set(['a', 'b', 'c', 'd', 'e', 'f']);
// const letters = new Set(["a","b","c"]);

//has method();

let result = latter.has("d");
console.log(result);

// delete method();
console.log(latter.delete("d"));
console.log(latter)

for (let x of latter){
    console.log(x+" ");
}
// // Filter Dublictae value from Arrya

// let array = [2,3,4,5,6,3,34,6,6,600];

// console.log(array);

// let newArray =new Set(array);
// let  uniqueArrayvalue  = [...newArray];
// console.log(uniqueArrayvalue);