
// call backfunction

function add(x,y){
    return x+y;

}
function multiply(x,y){

    return x*y;
}
function sub(x,y){

    return x-y;
}
function div(x,y){

    return x/y;
}
function display(x, y, operation){
    var  result = operation(x,y);
    console.log(result);
}
display(10,10, add);
display(20,20, multiply);
display(100,50, sub);
display(100, 50, div);