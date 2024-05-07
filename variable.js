// Difference between let var and cont 
// variable :- variable is used to store data .

// var : It is Function scoper variable. It can be access through inside program
// It can be re-declared and re-assigned
var a= 12;
console.log(a);
 a= 50;
 console.log(a);

 var a = 100;
 console.log(a);



// let:
// let has block scope and can be re-assigned but not re-declared

function sum (){
    
    let b= 10;
  
    let c = 20;
    console.log("sum of two number is " +(b+c));
   
    console.log(b);
}


sum();

// const
 function sum1(){
    const var1 = 100;
    const var2 = 200;
    
    console.log("sum of two number is " +(var1+var2));
 }

 sum1();


