function onuterfunction (){

    const a = 10;
    const b= 20;
    
    const add = a+b;
    console.log(   `sum of two number is  = ${add}`);

    function innerfunction (){
      
        let multiplier = a*b;
        console.log(   `multiplication of two number is  = ${multiplier}`);
    }

    return innerfunction;

}

const callfunction = onuterfunction();
callfunction();