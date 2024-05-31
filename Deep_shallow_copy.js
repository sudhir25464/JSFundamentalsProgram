
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
// console.log(deepcopy);


