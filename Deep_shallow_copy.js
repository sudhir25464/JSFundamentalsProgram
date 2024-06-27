
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

// shadow copy in nexted object case  it modify the nexted object value if clone propery value changed.
const shallowcopy = Object.assign({},person);
shallowcopy.address.city= 'Mumbai';

console.log(shallowcopy.address.city);

// deep copy : Deep copy will not changed parent object and nexted object value .It only change clone object value
const deepcopy = JSON.parse(JSON.stringify(person));
deepcopy.address.city ='Banglore';


console.log(shallowcopy);
// console.log(deepcopy);


