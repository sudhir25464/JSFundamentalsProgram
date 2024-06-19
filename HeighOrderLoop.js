const str = "sudhir singh";

for(const latter of str){
    
    console.log(`my name ${latter}`);
}


// map

const map = new Map();

map.set('IN', 'INDIA');
map.set('OUT', 'OURIE');
map.set('IN', ' INDIA');
map.set('OUT', 'OSFR');

// console.log(map);

for(const value of map){ // IT rerurn result in the form of aaray
    console.log(value);
}

for(const [key,value] of map){ //destructure of array
    console.log(key,' - ', value);
}


// FOR IN LOOP ON 0ITERABLE OBJECT

// const ar = [12,32,32,4,2];

// const string=['dnsj','js','cpp','json'];  it return 0,1,2,3

// for (const key in string){
//     console.log(key);
// }


const myobject ={
    name:'sudhir',
    age:25,
    city:'banglore'
}

for(const key in myobject){

console.log(`${key} :- ${myobject[key]}`);
}

// FOREACH

const programming = ['js','HTML','CSS','JAVA', 'RRACT'];


programming.forEach((item,index)=>{
    console.log(item, index);
})

// declare array of objects

const myCoding = [
    {
        languages:'javascript',
        languagesfilename:'js',
    },
    {
        languages:'java',
        languagesfilename:'java',
    },
    {
        languages:'python',
        languagesfilename:'py',
    }
]

myCoding.forEach((item,index, myCoding)=>{
    console.log(item.languages, index,);
})

