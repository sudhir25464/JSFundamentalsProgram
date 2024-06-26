const { copyFileSync } = require("fs");
const { type } = require("os");

// craete dynamic arrays function
let array = []
function dynamicArray(...val){

     array.push(...val);
     console.log(array);
  
    
}

dynamicArray(20,40,50,930,28329,);


let objArray = []

function  dynamicObject(id, name){

  objArray.push({id,name})
  console.log(objArray);

//   if(objArray.length>3){
//     let newval = objArray.filter((obj)=>{
//         obj.id==2
//         console.log(newval);
//     })
//   }

}

dynamicObject(2,'name',);
dynamicObject(1,'name', );
dynamicObject(1,'name', );
dynamicObject(2,'name', );


let myArray =[]
function addnewval (...val){

  myArray.push(...val);
  return myArray;  
}

console.log(addnewval(10,203,39));


myobj = []
function addObj(name,city){
myobj.push({name,city})
console.log(myobj);

}

addObj('name', 'patna');
addObj('name', 'patna');

addObj('name', 'patna');

const persion = {

  name:'rahul',
  age:20,
  city:'Patna',
  eduction :{
    type:'B.Tech',
    institute:'NIT'
  }
}


console.log(persion);
// shadow copy
const shadowval = Object.assign({}, persion);

shadowval.city = 'Mumbai';
shadowval.name="sudhir"
shadowval.age=40;

shadowval.eduction.type='BCA'


console.log(shadowval);

console.log(persion);

// deepcopy 

// const DeepVal = JSON.parse(JSON.stringify(persion));


// DeepVal.name="newname";

// DeepVal.eduction.type='BCA';

// console.log(DeepVal);
// console.log(persion);

