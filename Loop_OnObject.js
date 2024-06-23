
const person = {
    name :'Raju sharma',
    age:21,
    city:'Banglore',
}

// console.log(person);

for ( let [key, value] of Object.entries(person) ){
    console.log(`${key} = ${value}`);
}



const person2 = {
    name :'Raju sharma',
    age:21,
    city:'Banglore',
    say: function(){
        console.log(`Hey am ${this.name}`)
    }
}

console.log(person2.say());
// console.log(person);

for ( let [key, value] of Object.entries(person2) ){
    console.log(`${key} = ${value}`);
}

