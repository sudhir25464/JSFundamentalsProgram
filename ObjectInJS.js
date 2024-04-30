// creation of object 

const persion= {
    name: 'Rama Kumar',
    age: '22',
    city:'patna',
    contact:'221xxxxx90'
}

console.log(persion); // access object
console.log(persion.name); // access name from object

// There are mainly two method creation of abject 
// -- object literal  -- object constructor 

// object literal
// object access with Method 

const persion2 = {
    name: 'Rohit Sharma',
    age:'35',
    hobby: ' cricket',
    popular_Name:'Hit man',
    city:'Mombie',

    getData : function(){

        return(` Rohit is Good Caption and Batsman \n 
         full name is ${persion2.name},   age :  ${persion2.age}
         hobby: ${persion2.hobby}  popular name is :  ${persion2.popular_Name}
        `
    )
    } 
}
console.log(persion2.getData());

// Here accessible same object with this keyword  because it access current instance of object 
// object Constructor
const persion3 = {
    name: 'Rohit Sharma',
    age:'35',
    hobby: ' cricket',
    popular_Name:'Hit man',
    city:'Mombie',

    getData : function(){

        return(` Rohit is Good Caption and Batsman \n 
         full name is ${this.name},   age :  ${this.age}
         hobby: ${this.hobby}  popular name is :  ${this.popular_Name}
        `
    )
    } 
}
console.log(persion2.getData());
// here it will returnsame out put 

