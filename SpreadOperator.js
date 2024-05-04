// Exemple of spread Operator

const arr = [1,2,3,4,5,6,7];
console.log(...arr);

// copy array 

const orgArray =[10,20,30,40,40];
const copyArry =[...orgArray];
console.log(copyArry);

const arr1 =[20,304,30,40,50];
const arr2 = [100,200,300,300];

const  newArray = [...arr1, ...arr2];
console.log(newArray);


// Rest Arguments

display(1, 2, 3,4, 5, 6, 7);

function  display( first, second, ... restArguments ) {

    console.log(first);
    console.log(second);
    console.log(restArguments);
}