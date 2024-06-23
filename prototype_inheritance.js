//OLD METHODS 
 const user = {
    name:'rama',
    email:"user@gmail.com"
 }
const Taeacher = {
    makeVideo : true,
}
const TeacherSupport = {
    isAvlable :false
}
const TAsupport ={
    fullTime :true,
    makeAssignment :'js Assignment',
    __proto__ :TeacherSupport

}

console.log(TAsupport);


let username = "sudhir singh   "
String.prototype.lenthTrue = function(){

    console.log(this)
}

username.lenthTrue();