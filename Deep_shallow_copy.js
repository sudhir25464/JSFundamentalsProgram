
const person= {
    name:'Happy',
    age:20,
    address:{
        city:'Delhi',
        country:'India',
    }
}
console.log(person);
console.log(person.name);
// shallow copy 
const shallowcopy = Object.assign({},person);
shallowcopy.address.city= 'Mumbai';

console.log(shallowcopy.address.city);

const deepcopy = JSON.parse(JSON.stringify(person));
deepcopy.address.city ='Banglore';


console.log(shallowcopy);
console.log(deepcopy);
let myArray= [1,2,3,4,24,5,25,3,3,53,53];
const myset = new Set (myArray);
console.log(myset);
const newArray = [...myset];
console.log(newArray);
